import { useEffect, useState } from 'react';
import { usePrefs } from '../hooks';
import { t } from '../i18n/strings';
import { speech, matchVoiceIn, speechLangFor, type VoiceInfo } from '../lib/tts';
import { contentVariantFor } from '../hooks';
import type { ArabicDialect, ExplanationLang, Theme, UiLang } from '../lib/prefs';

// Omar's Dev Dictionary — settings.
// Voice availability is reported honestly from the actual device voices:
// exact locale match / same language / no suitable voice.

export default function SettingsPage() {
  const [prefs, setPrefs] = usePrefs();
  const lang = prefs.uiLang;
  const variant = contentVariantFor(prefs);
  const [voices, setVoices] = useState<VoiceInfo[]>(speech.getVoices());

  useEffect(() => {
    // Some browsers populate voices asynchronously after user interaction.
    const timer = window.setInterval(() => {
      const current = speech.getVoices();
      if (current.length !== voices.length) setVoices(current);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [voices.length]);

  const wantedLocale = speechLangFor(variant);
  const match = matchVoiceIn(voices, wantedLocale);

  function RadioGroup<T extends string>({
    legend, value, onChange, options
  }: {
    legend: string;
    value: T;
    onChange: (value: T) => void;
    options: { value: T; label: string }[];
  }) {
    return (
      <fieldset className="setting-group">
        <legend>{legend}</legend>
        <div className="radio-row">
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name={legend}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'settingsTitle')}</h1>
      </header>

      <RadioGroup<UiLang>
        legend={t(lang, 'interfaceLanguage')}
        value={prefs.uiLang}
        onChange={(uiLang) => setPrefs({ uiLang })}
        options={[
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية' }
        ]}
      />

      <RadioGroup<ExplanationLang>
        legend={t(lang, 'explanationLanguage')}
        value={prefs.explanationLang}
        onChange={(explanationLang) => setPrefs({ explanationLang })}
        options={[
          { value: 'ui', label: t(lang, 'explanationFollowUi') },
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية' }
        ]}
      />

      {prefs.explanationLang !== 'en' && (
        <RadioGroup<ArabicDialect>
          legend={t(lang, 'arabicDialect')}
          value={prefs.dialect}
          onChange={(dialect) => setPrefs({ dialect })}
          options={[
            { value: 'msa', label: t(lang, 'dialectMsa') },
            { value: 'eg', label: t(lang, 'dialectEg') },
            { value: 'sa', label: t(lang, 'dialectSa') }
          ]}
        />
      )}

      <RadioGroup<Theme>
        legend={t(lang, 'theme')}
        value={prefs.theme}
        onChange={(theme) => setPrefs({ theme })}
        options={[
          { value: 'light', label: t(lang, 'themeLight') },
          { value: 'dark', label: t(lang, 'themeDark') },
          { value: 'system', label: t(lang, 'themeSystem') }
        ]}
      />

      <fieldset className="setting-group">
        <legend>{t(lang, 'audioSection')}</legend>
        {!speech.supported ? (
          <p className="subtitle">{t(lang, 'speechUnsupported')}</p>
        ) : (
          <>
            <label htmlFor="rate">
              {t(lang, 'speechRate')}: {prefs.speechRate.toFixed(1)}×
            </label>
            <input
              id="rate"
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={prefs.speechRate}
              onChange={(e) => setPrefs({ speechRate: Number(e.target.value) })}
            />
            <h3>{t(lang, 'voicesHeading')}</h3>
            {match.kind !== 'none' && match.voice != null && (
              <p className="subtitle">
                {match.kind === 'exact' ? t(lang, 'voiceExact') : t(lang, 'voiceLanguage')}:{' '}
                <strong className="ltr">{match.voice.name}</strong>
                <span className="ltr"> ({match.voice.lang})</span>
              </p>
            )}
            {voices.length === 0 ? (
              <p className="subtitle">{t(lang, 'noVoices')}</p>
            ) : (
              <ul className="voice-list">
                {voices.map((voice) => (
                  <li key={`${voice.name}-${voice.lang}`} className="ltr">
                    {voice.name} — {voice.lang}
                  </li>
                ))}
              </ul>
            )}
            {match.kind === 'none' && voices.length > 0 && (
              <p className="subtitle">{t(lang, 'voiceNone')}</p>
            )}
          </>
        )}
      </fieldset>

      <p className="subtitle">{t(lang, 'dataNote')}</p>
    </div>
  );
}
