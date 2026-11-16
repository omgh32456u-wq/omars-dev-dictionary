import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { defaultPrefs, prefsStore, type Prefs, type ArabicDialect, type ExplanationLang, type Theme, type UiLang } from './lib/prefs';
import { defaultUserData, pushRecent, setTermStatus, toggleFavorite, userStore, type LearnStatus, type UserData } from './lib/user';
import { chunkText, onSpeechChange, prepareSpeechText, speech, speechLangFor } from './lib/tts';
import { resolveContent, speechSections, type ResolvedContent } from './lib/content';
import type { LangCode, Term } from './types';

// Omar's Dev Dictionary — shared React hooks.

let prefsCache: Prefs | null = null;
function prefsSnapshot(): Prefs {
  if (prefsCache == null) prefsCache = prefsStore.read() ?? defaultPrefs;
  return prefsCache;
}

export function usePrefs(): [Prefs, (patch: Partial<Prefs>) => void] {
  const prefs = useSyncExternalStore(
    (onStoreChange) =>
      prefsStore.subscribe(() => {
        prefsCache = null;
        onStoreChange();
      }),
    prefsSnapshot,
    () => defaultPrefs
  );
  const setPrefs = useCallback((patch: Partial<Prefs>) => {
    prefsStore.update((current) => ({ ...current, ...patch }));
  }, []);
  return [prefs, setPrefs];
}

let userCache: UserData | null = null;
function userSnapshot(): UserData {
  if (userCache == null) userCache = userStore.read() ?? defaultUserData;
  return userCache;
}

export interface UserActions {
  toggleFavorite: (termId: string) => void;
  pushRecent: (termId: string) => void;
  setStatus: (termId: string, status: LearnStatus | 'none') => void;
}

const USER_ACTIONS: UserActions = {
  toggleFavorite: (termId) => userStore.update((d) => toggleFavorite(d, termId)),
  pushRecent: (termId) => userStore.update((d) => pushRecent(d, termId)),
  setStatus: (termId, status) => userStore.update((d) => setTermStatus(d, termId, status))
};

/** Stable actions object so effects can depend on it safely. */
export function useUserData(): [UserData, UserActions] {
  const data = useSyncExternalStore(
    (onStoreChange) =>
      userStore.subscribe(() => {
        userCache = null;
        onStoreChange();
      }),
    userSnapshot,
    () => defaultUserData
  );
  return [data, USER_ACTIONS];
}

/** Which content variant a term page should show, from the user's settings. */
export function contentVariantFor(prefs: Prefs): LangCode {
  const wantsArabic =
    prefs.explanationLang === 'ar' || (prefs.explanationLang === 'ui' && prefs.uiLang === 'ar');
  if (!wantsArabic) return 'en';
  if (prefs.dialect === 'eg') return 'ar-eg';
  if (prefs.dialect === 'sa') return 'ar-sa';
  return 'ar-msa';
}

/** Speakable section texts for a resolved content object (plain helper). */
export function speechTextsFor(resolved: ResolvedContent): { key: string; text: string; lang: LangCode }[] {
  return speechSections(resolved);
}

interface SpeechSnapshot {
  supported: boolean;
  key: string | null;
  paused: boolean;
}

export interface SpeechController extends SpeechSnapshot {
  speakSection: (termId: string, sectionKey: string, texts: string[], lang: LangCode, rate: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

function speechSnapshot(): SpeechSnapshot {
  return { supported: speech.supported, key: speech.currentKey, paused: speech.isPaused() };
}

export function useSpeech(): SpeechController {
  const [snapshot, setSnapshot] = useState<SpeechSnapshot>(speechSnapshot);
  useEffect(() => onSpeechChange(() => setSnapshot(speechSnapshot())), []);
  const speakSection = useCallback(
    (termId: string, sectionKey: string, texts: string[], lang: LangCode, rate: number) => {
      const chunks = texts
        .map(prepareSpeechText)
        .filter((text) => text.length > 0)
        .flatMap((text) => chunkText(text));
      speech.speak(chunks, speechLangFor(lang), rate, `${termId}:${sectionKey}`, {
        onDone: () => setSnapshot({ supported: speech.supported, key: null, paused: false }),
        onError: () => setSnapshot({ supported: speech.supported, key: null, paused: false })
      });
      setSnapshot({ supported: speech.supported, key: `${termId}:${sectionKey}`, paused: false });
    },
    []
  );
  const pause = useCallback(() => {
    speech.pause();
    setSnapshot(speechSnapshot());
  }, []);
  const resume = useCallback(() => {
    speech.resume();
    setSnapshot(speechSnapshot());
  }, []);
  const stop = useCallback(() => {
    speech.stop();
    setSnapshot({ supported: speech.supported, key: null, paused: false });
  }, []);
  return { ...snapshot, speakSection, pause, resume, stop };
}

/** Apply RTL/LTR and language to <html>. */
export function useDocumentDirection(prefs: Prefs): void {
  useEffect(() => {
    document.documentElement.dir = prefs.uiLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = prefs.uiLang;
  }, [prefs.uiLang]);
}

/** Apply light/dark theme class to <html>. */
export function useThemeClass(prefs: Prefs): void {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = (): void => {
      const dark = prefs.theme === 'dark' || (prefs.theme === 'system' && media.matches);
      root.classList.toggle('dark', dark);
    };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [prefs.theme]);
}

export type { ArabicDialect, ExplanationLang, LearnStatus, Theme, UiLang };
export { resolveContent };
export type { ResolvedContent, Term };
