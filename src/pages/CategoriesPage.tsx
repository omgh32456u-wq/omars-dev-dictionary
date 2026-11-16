import { usePrefs } from '../hooks';
import { t } from '../i18n/strings';
import { CATEGORIES } from '../data/meta';
import { termsInCategory } from '../lib/content';
import { TermList } from '../components/TermCard';

// Omar's Dev Dictionary — categories overview.

export default function CategoriesPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'categoriesTitle')}</h1>
        <p className="subtitle">{t(lang, 'categoriesSubtitle')}</p>
      </header>

      {CATEGORIES.map((category) => {
        const terms = termsInCategory(category.id);
        return (
          <section key={category.id} aria-labelledby={`cat-${category.id}`}>
            <h2 id={`cat-${category.id}`}>
              {lang === 'ar' ? category.ar : category.en}
              <span className="badge">{terms.length} {t(lang, 'terms')}</span>
            </h2>
            <p className="subtitle">{lang === 'ar' ? category.descriptionAr : category.descriptionEn}</p>
            <TermList terms={terms.slice(0, 6)} lang={lang} emptyTitle="" emptyBody="" />
            {terms.length > 6 && (
              <p>
                <a className="btn" href={`#/glossary?category=${category.id}`}>
                  {t(lang, 'viewTerm')} ({terms.length})
                </a>
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
