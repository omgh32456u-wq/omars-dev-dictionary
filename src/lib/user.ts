import { createStore, unwrap } from './store';

// Omar's Dev Dictionary — user learning data (favorites, recently viewed,
// learning status). Key: "odd:user:v1". Kept separate from preferences so
// changing language or theme never erases learning data.

export type LearnStatus = 'learning' | 'learned';

export interface UserData {
  favorites: string[];
  recents: string[];
  status: Record<string, LearnStatus>;
  learnedAt: Record<string, number>;
}

export const MAX_RECENTS = 20;

export const defaultUserData: UserData = {
  favorites: [],
  recents: [],
  status: {},
  learnedAt: {}
};

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

export function migrateUserData(raw: unknown): UserData | null {
  const data = unwrap(raw);
  if (data == null || typeof data !== 'object') return null;
  const d = data as Partial<UserData>;
  const status: Record<string, LearnStatus> = {};
  if (d.status != null && typeof d.status === 'object') {
    for (const [key, value] of Object.entries(d.status)) {
      if (value === 'learning' || value === 'learned') status[key] = value;
    }
  }
  const learnedAt: Record<string, number> = {};
  if (d.learnedAt != null && typeof d.learnedAt === 'object') {
    for (const [key, value] of Object.entries(d.learnedAt)) {
      if (typeof value === 'number') learnedAt[key] = value;
    }
  }
  return { favorites: stringArray(d.favorites), recents: stringArray(d.recents), status, learnedAt };
}

export const userStore = createStore<UserData>('odd:user:v1', migrateUserData, () => defaultUserData);

/** Pure helpers — used by the UI and directly by tests. */
export function toggleFavorite(data: UserData, termId: string): UserData {
  const favorites = data.favorites.includes(termId)
    ? data.favorites.filter((id) => id !== termId)
    : [termId, ...data.favorites];
  return { ...data, favorites };
}

export function pushRecent(data: UserData, termId: string): UserData {
  const recents = [termId, ...data.recents.filter((id) => id !== termId)].slice(0, MAX_RECENTS);
  return { ...data, recents };
}

export function setTermStatus(data: UserData, termId: string, status: LearnStatus | 'none'): UserData {
  const next: UserData = { ...data, status: { ...data.status }, learnedAt: { ...data.learnedAt } };
  if (status === 'none') {
    delete next.status[termId];
    delete next.learnedAt[termId];
    return next;
  }
  next.status[termId] = status;
  if (status === 'learned') next.learnedAt[termId] = Date.now();
  else delete next.learnedAt[termId];
  return next;
}

export function countByStatus(data: UserData): { learned: number; learning: number } {
  let learned = 0;
  let learning = 0;
  for (const value of Object.values(data.status)) {
    if (value === 'learned') learned += 1;
    else learning += 1;
  }
  return { learned, learning };
}
