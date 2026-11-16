import { usePrefs } from '../hooks';
import { t } from '../i18n/strings';
import { allTerms } from '../lib/content';

// Omar's Dev Dictionary — about page.

const APP_VERSION = '1.0.0';

export default function AboutPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;

  return (
    <div>
      <header className="page-title">
        <h1>Omar&rsquo;s Dev Dictionary</h1>
        <p className="subtitle">{t(lang, 'aboutOwner')}</p>
        <p className="subtitle">{t(lang, 'aboutVersion')}: {APP_VERSION}</p>
      </header>

      <section className="section">
        <h2>{t(lang, 'aboutTitle')}</h2>
        <p>{t(lang, 'aboutPurpose')}</p>
        <p className="subtitle">
          {allTerms().length} {t(lang, 'dictionarySize')}
        </p>
      </section>

      <section className="section">
        <p>{t(lang, 'aboutLocalData')}</p>
        <p>{t(lang, 'dataNote')}</p>
      </section>
    </div>
  );
}
