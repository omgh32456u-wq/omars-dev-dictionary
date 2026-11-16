import { t } from '../i18n/strings';

// Omar's Dev Dictionary — small UI helpers.
// (Per-section audio controls live inside TermPage; the speech engine itself
// is src/lib/tts.ts behind the SpeechProvider interface.)

export function CopyButton({ code, uiLang }: { code: string; uiLang: 'en' | 'ar' }) {
  return (
    <button
      type="button"
      className="small"
      onClick={() => {
        void navigator.clipboard?.writeText(code);
      }}
      aria-label={t(uiLang, 'copy')}
    >
      {t(uiLang, 'copy')}
    </button>
  );
}
