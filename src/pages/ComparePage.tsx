import { useState } from 'react';
import { usePrefs } from '../hooks';
import { t } from '../i18n/strings';
import { allTerms, resolveContent, getTermById, normalizeQuery } from '../lib/content';
import { contentVariantFor } from '../hooks';
import type { Term } from '../types';

// Omar's Dev Dictionary — compare terms page.

export default function ComparePage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const variant = contentVariantFor(prefs);
  const [selected, setSelected] = useState<string[]>([]);
  const [pickerQuery, setPickerQuery] = useState('');

  const pool = allTerms();
  const pickerResults =
    pickerQuery.trim().length > 0
      ? pool.filter((term) => normalizeQuery(term.name).includes(normalizeQuery(pickerQuery))).slice(0, 8)
      : [];

  const chosen: Term[] = selected
    .map((id) => getTermById(id))
    .filter((term): term is NonNullable<typeof term> => term != null);

  function toggle(id: string): void {
    setSelected((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]
    );
  }

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'compareTitle')}</h1>
        <p className="subtitle">{t(lang, 'compareSubtitle')}</p>
      </header>

      <section className="card">
        <label htmlFor="compare-picker">{t(lang, 'compareAdd')}</label>
        <input
          id="compare-picker"
          type="search"
          value={pickerQuery}
          onChange={(e) => setPickerQuery(e.target.value)}
          placeholder={t(lang, 'searchPlaceholder')}
        />
        {pickerResults.length > 0 && (
          <div className="grid cols-3">
            {pickerResults.map((term) => (
              <button key={term.id} type="button" className="term-row" onClick={() => toggle(term.id)}>
                <span className="name">{term.name}</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {selected.length > 0 && (
        <p>
          <button type="button" onClick={() => setSelected([])}>{t(lang, 'compareClear')}</button>
        </p>
      )}

      {chosen.length < 2 ? (
        <div className="empty">
          <h3>{t(lang, 'comparePick')}</h3>
          <p>{t(lang, 'compareNeedTwo')}</p>
        </div>
      ) : (
        <table className="compare-table">
          <thead>
            <tr>
              <th scope="col">{t(lang, 'all')}</th>
              {chosen.map((term) => (
                <th key={term.id} scope="col">{term.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{t(lang, 'termDefinition')}</th>
              {chosen.map((term) => (
                <td key={term.id}>{resolveContent(term, variant).definition.text}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">{t(lang, 'termSimple')}</th>
              {chosen.map((term) => (
                <td key={term.id}>{resolveContent(term, variant).simple.text}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">{t(lang, 'compareHowItWorks')}</th>
              {chosen.map((term) => {
                const how = resolveContent(term, variant).howItWorks;
                return <td key={term.id}>{how != null ? how.text : '—'}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">{t(lang, 'compareUseCases')}</th>
              {chosen.map((term) => {
                const use = resolveContent(term, variant).whenToUse;
                return <td key={term.id}>{use != null ? use.text : '—'}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">{t(lang, 'compareRelationship')}</th>
              {chosen.map((term) => {
                const related = term.related
                  .map((id) => getTermById(id)?.name)
                  .filter((name): name is string => name != null);
                return <td key={term.id}>{related.length > 0 ? related.join(', ') : '—'}</td>;
              })}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
