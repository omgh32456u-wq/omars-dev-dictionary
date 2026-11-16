// Omar's Dev Dictionary — typed local-first storage layer.
// Storage keys are preserved: "odd:prefs:v1" and "odd:user:v1".
// Every store is a tiny observable so React can subscribe with useSyncExternalStore.

export interface Backend {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function memoryBackend(): Backend {
  const map = new Map<string, string>();
  return {
    getItem: (key) => (map.has(key) ? map.get(key)! : null),
    setItem: (key, value) => void map.set(key, value),
    removeItem: (key) => void map.delete(key)
  };
}

export function defaultBackend(): Backend {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const probe = '__odd_probe__';
      window.localStorage.setItem(probe, '1');
      window.localStorage.removeItem(probe);
      return {
        getItem: (key) => window.localStorage.getItem(key),
        setItem: (key, value) => window.localStorage.setItem(key, value),
        removeItem: (key) => window.localStorage.removeItem(key)
      };
    }
  } catch {
    // localStorage unavailable (private mode, disabled) — fall back to memory.
  }
  return memoryBackend();
}

export interface Store<T> {
  read(): T | null;
  write(value: T): void;
  update(fn: (current: T) => T): T;
  subscribe(listener: () => void): () => void;
}

export function createStore<T>(
  key: string,
  migrate: (raw: unknown) => T | null,
  fallback: () => T,
  backend: Backend = defaultBackend()
): Store<T> {
  const listeners = new Set<() => void>();
  const notify = () => listeners.forEach((listener) => listener());
  const read = (): T | null => {
    try {
      const raw = backend.getItem(key);
      if (raw == null) return null;
      return migrate(JSON.parse(raw) as unknown);
    } catch {
      return null;
    }
  };
  return {
    read,
    write(value) {
      try {
        backend.setItem(key, JSON.stringify({ v: 1, data: value }));
      } catch {
        // Quota exceeded or storage unavailable: state still lives in memory this session.
      }
      notify();
    },
    update(fn) {
      const next = fn(read() ?? fallback());
      try {
        backend.setItem(key, JSON.stringify({ v: 1, data: next }));
      } catch {
        // Same tolerance as write().
      }
      notify();
      return next;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => void listeners.delete(listener);
    }
  };
}

/** Accepts both the wrapped shape { v, data } and legacy raw objects. */
export function unwrap(raw: unknown): unknown {
  if (raw && typeof raw === 'object' && 'data' in (raw as Record<string, unknown>)) {
    return (raw as { data: unknown }).data;
  }
  return raw;
}
