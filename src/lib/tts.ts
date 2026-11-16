// Omar's Dev Dictionary — speech abstraction ("SpeechProvider").
// Browser Web Speech API sits behind an interface so another provider can be
// introduced without rewriting the UI. One active speech chain at a time:
// starting a new section automatically stops the previous one.

export interface VoiceInfo {
  name: string;
  lang: string;
}

export type VoiceMatchKind = 'exact' | 'language' | 'none';

export interface VoiceMatch {
  kind: VoiceMatchKind;
  voiceIndex: number | null;
  voice: VoiceInfo | null;
}

export interface SpeechEvents {
  onDone?: () => void;
  onError?: (message: string) => void;
}

export interface SpeechProvider {
  readonly supported: boolean;
  readonly currentKey: string | null;
  getVoices(): VoiceInfo[];
  speak(chunks: string[], lang: string, rate: number, key: string, events?: SpeechEvents): void;
  pause(): void;
  resume(): boolean;
  stop(): void;
  isPaused(): boolean;
}

export function normalizeLocale(lang: string): string {
  return lang.trim().toLowerCase().replace(/_/g, '-');
}

export function primaryLanguage(lang: string): string {
  const normalized = normalizeLocale(lang);
  const primary = normalized.split('-')[0];
  return primary ?? normalized;
}

/** Honest voice matching: exact locale, general language, or none. */
export function matchVoiceIn(voices: VoiceInfo[], wanted: string): VoiceMatch {
  const target = normalizeLocale(wanted);
  const exactIndex = voices.findIndex((v) => normalizeLocale(v.lang) === target);
  if (exactIndex >= 0) {
    return { kind: 'exact', voiceIndex: exactIndex, voice: voices[exactIndex]! };
  }
  const primary = primaryLanguage(wanted);
  const languageIndex = voices.findIndex((v) => primaryLanguage(v.lang) === primary);
  if (languageIndex >= 0) {
    return { kind: 'language', voiceIndex: languageIndex, voice: voices[languageIndex]! };
  }
  return { kind: 'none', voiceIndex: null, voice: null };
}

/** BCP-47 locale for a content variant. */
export function speechLangFor(variant: string): string {
  if (variant === 'ar-eg') return 'ar-EG';
  if (variant === 'ar-sa') return 'ar-SA';
  if (variant === 'ar-msa') return 'ar';
  return 'en';
}

/** URLs are never read aloud character by character; replace them safely. */
export function prepareSpeechText(text: string): string {
  return text
    .replace(/https?:\/\/\S+/g, 'link')
    .replace(/\s+/g, ' ')
    .trim();
}

const MAX_CHUNK = 220;

function hardSplit(sentence: string, max: number): string[] {
  const out: string[] = [];
  let buffer = '';
  for (const word of sentence.split(' ')) {
    if (buffer && buffer.length + 1 + word.length > max) {
      out.push(buffer);
      buffer = word;
    } else {
      buffer = buffer ? `${buffer} ${word}` : word;
    }
  }
  if (buffer) out.push(buffer);
  return out;
}

/** Split long text into speech-sized chunks on sentence boundaries. */
export function chunkText(text: string, max: number = MAX_CHUNK): string[] {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length === 0) return [];
  if (clean.length <= max) return [clean];
  const sentences = clean.match(/[^.!?؟\n]+[.!?؟]*\s*/g) ?? [clean];
  const out: string[] = [];
  let buffer = '';
  for (const raw of sentences) {
    const sentence = raw.trim();
    if (sentence.length === 0) continue;
    if (sentence.length > max) {
      if (buffer) {
        out.push(buffer);
        buffer = '';
      }
      out.push(...hardSplit(sentence, max));
      continue;
    }
    if (buffer && buffer.length + 1 + sentence.length > max) {
      out.push(buffer);
      buffer = sentence;
    } else {
      buffer = buffer ? `${buffer} ${sentence}` : sentence;
    }
  }
  if (buffer) out.push(buffer);
  return out;
}

type StateListener = () => void;
const listeners = new Set<StateListener>();

export function onSpeechChange(listener: StateListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notify(): void {
  for (const listener of listeners) listener();
}

export class WebSpeechProvider implements SpeechProvider {
  private readonly synth: SpeechSynthesis | null;
  private queue: string[] = [];
  private index = 0;
  private activeKey: string | null = null;
  private paused = false;
  private rate = 1;
  private lang = 'en';
  private events: SpeechEvents | null = null;

  constructor() {
    this.synth =
      typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
  }

  get supported(): boolean {
    return this.synth != null;
  }

  get currentKey(): string | null {
    return this.activeKey;
  }

  getVoices(): VoiceInfo[] {
    if (this.synth == null) return [];
    return this.synth.getVoices().map((v) => ({ name: v.name, lang: v.lang }));
  }

  speak(chunks: string[], lang: string, rate: number, key: string, events?: SpeechEvents): void {
    this.stop(); // stop-before-start: never overlap speech
    if (this.synth == null || chunks.length === 0) {
      events?.onDone?.();
      notify();
      return;
    }
    this.queue = chunks;
    this.index = 0;
    this.lang = lang;
    this.rate = rate;
    this.activeKey = key;
    this.events = events ?? null;
    this.paused = false;
    this.speakCurrent();
    notify();
  }

  private speakCurrent(): void {
    const synth = this.synth;
    if (synth == null) return;
    const chunk = this.queue[this.index];
    if (chunk == null || this.activeKey == null) {
      this.activeKey = null;
      this.events?.onDone?.();
      notify();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = this.lang;
    utterance.rate = this.rate;
    const liveVoices = synth.getVoices();
    const match = matchVoiceIn(
      liveVoices.map((v) => ({ name: v.name, lang: v.lang })),
      this.lang
    );
    const voice = match.voiceIndex != null ? liveVoices[match.voiceIndex] : undefined;
    if (voice) utterance.voice = voice;
    utterance.onend = () => {
      if (this.activeKey == null) return;
      this.index += 1;
      if (this.index >= this.queue.length) {
        this.activeKey = null;
        this.paused = false;
        this.events?.onDone?.();
        notify();
      } else {
        this.speakCurrent();
      }
    };
    utterance.onerror = (event) => {
      if (this.activeKey == null) return;
      this.activeKey = null;
      this.paused = false;
      this.events?.onError?.(event.error || 'speech-error');
      notify();
    };
    synth.speak(utterance);
  }

  pause(): void {
    if (this.synth == null) return;
    try {
      this.synth.pause();
      this.paused = true;
      notify();
    } catch {
      // Speech errors never break the page.
    }
  }

  resume(): boolean {
    if (this.synth == null || this.activeKey == null) return false;
    try {
      this.synth.resume();
      this.paused = false;
      notify();
      return true;
    } catch {
      return false;
    }
  }

  stop(): void {
    if (this.synth != null) {
      try {
        this.synth.cancel();
      } catch {
        // ignore
      }
    }
    const had = this.activeKey != null;
    this.activeKey = null;
    this.queue = [];
    this.index = 0;
    this.paused = false;
    this.events = null;
    if (had) notify();
  }

  isPaused(): boolean {
    return this.paused;
  }
}

export const speech: SpeechProvider = new WebSpeechProvider();
