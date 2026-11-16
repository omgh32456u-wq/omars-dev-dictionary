import { usePrefs, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { allTerms, getTermById } from '../lib/content';
import { CATEGORIES } from '../data/meta';
import { LEARNING_PATHS } from '../data/paths';
import { countByStatus } from '../lib/user';

// Omar's Dev Dictionary — local learning analytics.
// Only real, locally recorded activity is shown — nothing fabricated.

export default function ProgressPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [userData] = useUserData();

  const total = allTerms().length;
  const { learned, learning } = countByStatus(userData);
  const completion = total > 0 ? Math.round((learned / total) * 100) : 0;

  const recentlyLearned = Object.entries(userData.learnedAt)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([id]) => getTermById(id))
    .filter((term): term is NonNullable<typeof term> => term != null);

  const hasActivity = learned > 0 || learning > 0;

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'progressTitle')}</h1>
      </header>

      {!hasActivity ? (
        <div className="empty">
          <h3>{t(lang, 'progressNoActivity')}</h3>
          <p>{t(lang, 'progressNoActivityBody')}</p>
        </div>
      ) : (
        <>
          <div className="stat-grid">
            <div className="card stat">
              <div className="num">{total}</div>
              <div className="label">{t(lang, 'progressTotal')}</div>
            </div>
            <div className="card stat">
              <div className="num">{learned}</div>
              <div className="label">{t(lang, 'progressLearned')}</div>
            </div>
            <div className="card stat">
              <div className="num">{learning}</div>
              <div className="label">{t(lang, 'progressLearning')}</div>
            </div>
            <div className="card stat">
              <div className="num">{completion}%</div>
              <div className="label">{t(lang, 'progressCompletion')}</div>
            </div>
          </div>

          <h2>{t(lang, 'progressByCategory')}</h2>
          {CATEGORIES.map((category) => {
            const ids = allTerms().filter((term) => term.category === category.id).map((term) => term.id);
            const done = ids.filter((id) => userData.status[id] === 'learned').length;
            const percent = ids.length > 0 ? Math.round((done / ids.length) * 100) : 0;
            return (
              <div key={category.id} className="card" style={{ marginBottom: '0.6rem' }}>
                <h3>{lang === 'ar' ? category.ar : category.en}</h3>
                <div className="progress-bar">
                  <span style={{ width: `${percent}%` }} />
                </div>
                <p className="subtitle">{done} / {ids.length}</p>
              </div>
            );
          })}

          <h2>{t(lang, 'progressByPath')}</h2>
          {LEARNING_PATHS.map((path) => {
            const done = path.steps.filter((stepId) => userData.status[stepId] === 'learned').length;
            const percent = Math.round((done / path.steps.length) * 100);
            return (
              <div key={path.id} className="card" style={{ marginBottom: '0.6rem' }}>
                <h3>{lang === 'ar' ? path.ar : path.en}</h3>
                <div className="progress-bar">
                  <span style={{ width: `${percent}%` }} />
                </div>
                <p className="subtitle">{done} / {path.steps.length}</p>
              </div>
            );
          })}

          {recentlyLearned.length > 0 && (
            <>
              <h2>{t(lang, 'recentlyLearned')}</h2>
              <div className="grid cols-2">
                {recentlyLearned.map((term) => (
                  <a key={term.id} className="term-row" href={`#/term/${term.id}`}>
                    <span className="name">{term.name}</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
