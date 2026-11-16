import { useState } from 'react';
import { usePrefs, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { allTerms, getTermById, popularTerms, searchTerms } from '../lib/content';
import { CATEGORIES } from '../data/meta';
import { LEARNING_PATHS } from '../data/paths';
import { TermList } from '../components/TermCard';

// Omar's Dev Dictionary — Home dashboard.

export default function HomePage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [userData] = useUserData();
  const [query, setQuery] = useState('');
  const results = query.trim().length > 0 ? searchTerms(query).slice(0, 8) : [];

  const recent = userData.recents
    .map((id) => getTermById(id))
    .filter((term): term is NonNullable<typeof term> != null && term !== null)
    .slice(0, 5);

  const learning = userData.status;
  const learnedIds = Object.keys(learning).filter((id) => learning[id] === 'learned');
  const hasProgress = learnedIds.length > 0 || userData.favorites.length > 0 || recent.length > 0;

  const pathWithProgress = LEARNING_PATHS.map((path) => {
    const done = path.steps.filter((step) => learning[step] === 'learned').length;
    return { path, done, total: path.steps.length };
  }).find((entry) => entry.done > 0 && entry.done < entry.total);

  const continueTermId = pathWithProgress
    ? pathWithProgress.path.steps.find((step) => learning[step] !== 'learned')
    : learnedIds[learnedIds.length - 1];
  const continueTerm = continueTermId != null ? getTermById(continueTermId) : undefined;

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'homeWelcome')}</h1>
        <p className="subtitle">{t(lang, 'homeSubtitle')}</p>
        <p className="subtitle">
          <strong>{allTerms().length}</strong> {t(lang, 'dictionarySize')}
        </p>
      </header>

      <section className="card" aria-label={t(lang, 'homeSearch')}>
        <label htmlFor="home-search" className="subtitle">{t(lang, 'homeSearch')}</label>
        <input
          id="home-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(lang, 'searchPlaceholder')}
        />
        {results.length > 0 && (
          <TermList terms={results} lang={lang} emptyTitle="" emptyBody="" />
        )}
      </section>

      <h2>{t(lang, 'browseCategories')}</h2>
      <div className="grid cols-3">
        {CATEGORIES.map((category) => (
          <a key={category.id} className="term-row" href={`#/glossary?category=${category.id}`}>
            <span className="name">{lang === 'ar' ? category.ar : category.en}</span>
            <span className="meta">
              <span className="badge">{lang === 'ar' ? category.descriptionAr : category.descriptionEn}</span>
            </span>
          </a>
        ))}
      </div>

      <h2>{t(lang, 'popularTerms')}</h2>
      <TermList terms={popularTerms(6)} lang={lang} emptyTitle="" emptyBody="" />

      {hasProgress ? (
        <>
          {recent.length > 0 && (
            <>
              <h2>{t(lang, 'recentlyViewed')}</h2>
              <TermList terms={recent} lang={lang} emptyTitle="" emptyBody="" />
            </>
          )}
          {continueTerm != null && (
            <>
              <h2>{t(lang, 'continueLearning')}</h2>
              <div className="card">
                <a className="btn primary" href={`#/term/${continueTerm.id}`}>
                  {t(lang, 'pathContinue')}: {continueTerm.name}
                </a>
              </div>
            </>
          )}
          <h2>{t(lang, 'pathProgress')}</h2>
          <div className="grid cols-2">
            {pathWithProgress != null && (
              <div className="card">
                <h3>{lang === 'ar' ? pathWithProgress.path.ar : pathWithProgress.path.en}</h3>
                <div className="progress-bar">
                  <span style={{ width: `${(pathWithProgress.done / pathWithProgress.total) * 100}%` }} />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="empty">
          <h3>{t(lang, 'homeEmptyTitle')}</h3>
          <p>{t(lang, 'homeEmptyBody')}</p>
        </div>
      )}

      <h2>{t(lang, 'shortcuts')}</h2>
      <div className="grid cols-3">
        <a className="term-row" href="#/paths"><span className="name">{t(lang, 'pathsTitle')}</span></a>
        <a className="term-row" href="#/compare"><span className="name">{t(lang, 'compareTitle')}</span></a>
        <a className="term-row" href="#/progress"><span className="name">{t(lang, 'progressTitle')}</span></a>
      </div>
    </div>
  );
}
