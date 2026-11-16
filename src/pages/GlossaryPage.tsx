import { useMemo, useState } from 'react';
import { usePrefs } from '../hooks';
import { t } from '../i18n/strings';
import { searchTerms, type SortKey } from '../lib/content';
import { CATEGORIES, DIFFICULTY_LABELS } from '../data/meta';
import type { CategoryId, Difficulty } from '../types';
import { TermList } from '../components/TermCard';

// Omar's Dev Dictionary — glossary with search, filters, and sorting.

export default function GlossaryPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('relevance');

  const results = useMemo(
    () => searchTerms(query, { category, difficulty }, sort),
    [query, category, difficulty, sort]
  );

  const filtersActive = query.length > 0 || category !== 'all' || difficulty !== 'all';

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'glossaryTitle')}</h1>
        <p className="subtitle">{t(lang, 'glossarySubtitle')}</p>
      </header>

      <div className="filters">
        <label htmlFor="glossary-search">
          {t(lang, 'search')}
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(lang, 'searchPlaceholder')}
          />
        </label>

        <label htmlFor="glossary-category">
          {t(lang, 'filterCategory')}
          <select
            id="glossary-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryId | 'all')}
          >
            <option value="all">{t(lang, 'all')}</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {lang === 'ar' ? c.ar : c.en}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="glossary-difficulty">
          {t(lang, 'filterDifficulty')}
          <select
            id="glossary-difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty | 'all')}
          >
            <option value="all">{t(lang, 'all')}</option>
            <option value="beginner">{DIFFICULTY_LABELS.beginner[lang]}</option>
            <option value="intermediate">{DIFFICULTY_LABELS.intermediate[lang]}</option>
            <option value="advanced">{DIFFICULTY_LABELS.advanced[lang]}</option>
          </select>
        </label>

        <label htmlFor="glossary-sort">
          {t(lang, 'sortByPopularity')}
          <select
            id="glossary-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="relevance">{t(lang, 'sortByPopularity')}</option>
            <option value="name">{t(lang, 'sortByName')}</option>
            <option value="popularity">{t(lang, 'sortByPopularity')}</option>
          </select>
        </label>

        {filtersActive && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory('all');
              setDifficulty('all');
              setSort('relevance');
            }}
          >
            {t(lang, 'resetFilters')}
          </button>
        )}
      </div>

      <p className="subtitle">{results.length} {t(lang, 'resultsCount')}</p>

      <TermList
        terms={results}
        lang={lang}
        emptyTitle={t(lang, 'noResults')}
        emptyBody={t(lang, 'noResultsHint')}
      />
    </div>
  );
}
