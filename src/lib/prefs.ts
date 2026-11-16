import { createStore, unwrap } from './store';

// Omar's Dev Dictionary — user preferences (interface language, explanation
// language, Arabic dialect, theme, speech rate). Key: "odd:prefs:v1".

export type Theme = 'light' | 'dark' | 'system';
export type UiLang = 'en' | 'ar';
export type ExplanationLang = 'ui' | 'en' | 'ar';
export type ArabicDialect = 'msa' | 'eg' | 'sa';

export interface Prefs {
  uiLang: UiLang;
  explanationLang: ExplanationLang;
  dialect: ArabicDialect;
  theme: Theme;
  /** 0.5 – 2 */
  speechRate: number;
}

export const defaultPrefs: Prefs = {
  uiLang: 'en',
  explanationLang: 'ui',
  dialect: 'msa',
  theme: 'system',
  speechRate: 1
};

function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

export function migratePrefs(raw: unknown): Prefs | null {
  const data = unwrap(raw);
  if (data == null || typeof data !== 'object') return null;
  const d = data as Partial<Prefs>;
  const speechRate =
    typeof d.speechRate === 'number' && d.speechRate >= 0.5 && d.speechRate <= 2 ? d.speechRate : 1;
  return {
    uiLang: oneOf<UiLang>(d.uiLang, ['en', 'ar'], 'en'),
    explanationLang: oneOf<ExplanationLang>(d.explanationLang, ['ui', 'en', 'ar'], 'ui'),
    dialect: oneOf<ArabicDialect>(d.dialect, ['msa', 'eg', 'sa'], 'msa'),
    theme: oneOf<Theme>(d.theme, ['light', 'dark', 'system'], 'system'),
    speechRate
  };
}

export const prefsStore = createStore<Prefs>('odd:prefs:v1', migratePrefs, () => defaultPrefs);
