import type { Term } from '../types';
import { getCategory, DIFFICULTY_LABELS } from '../data/meta';
import { t } from '../i18n/strings';

// Omar's Dev Dictionary — shared term card used by glossary, favorites,
// recents, search results, and progress lists.

export function TermCard({ term, lang }: { term: Term; lang: 'en' | 'ar' }) {
  const category = getCategory(term.category);
  return (
    <a className="term-row" href={`#/term/${term.id}`}>
      <span className="name">{term.name}</span>
      <span className="meta">
        <span className={`badge badge-${term.difficulty}`}>
          {DIFFICULTY_LABELS[term.difficulty][lang]}
        </span>
        <span className="badge">{lang === 'ar' ? category.ar : category.en}</span>
        {term.subcategory != null && <span className="badge">{term.subcategory}</span>}
      </span>
    </a>
  );
}

export function TermList({ terms, lang, emptyTitle, emptyBody }: {
  terms: Term[];
  lang: 'en' | 'ar';
  emptyTitle: string;
  emptyBody: string;
}) {
  if (terms.length === 0) {
    return (
      <div className="empty">
        <h3>{emptyTitle}</h3>
        <p>{emptyBody}</p>
      </div>
    );
  }
  return (
    <div className="grid cols-2">
      {terms.map((term) => (
        <TermCard key={term.id} term={term} lang={lang} />
      ))}
    </div>
  );
}

export function TermCount({ count, lang }: { count: number; lang: 'en' | 'ar' }) {
  return (
    <p className="subtitle">
      {count} {t(lang, 'terms')}
    </p>
  );
}
