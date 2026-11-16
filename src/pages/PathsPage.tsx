import { usePrefs, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { LEARNING_PATHS } from '../data/paths';
import { getTermById } from '../lib/content';

// Omar's Dev Dictionary — learning paths page.

export default function PathsPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [userData] = useUserData();

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'pathsTitle')}</h1>
        <p className="subtitle">{t(lang, 'pathsSubtitle')}</p>
      </header>

      <div className="grid cols-2">
        {LEARNING_PATHS.map((path) => {
          const learnedCount = path.steps.filter(
            (stepId) => userData.status[stepId] === 'learned'
          ).length;
          const percent = Math.round((learnedCount / path.steps.length) * 100);
          const nextStep = path.steps.find((stepId) => userData.status[stepId] !== 'learned');
          const nextTerm = nextStep != null ? getTermById(nextStep) : undefined;

          return (
            <article key={path.id} className="card path-card">
              <h3>{lang === 'ar' ? path.ar : path.en}</h3>
              <p className="subtitle">{lang === 'ar' ? path.descriptionAr : path.descriptionEn}</p>
              <p className="subtitle">
                {t(lang, 'pathSteps')}: {path.steps.length} · {t(lang, 'progressCompletion')}: {percent}%
              </p>
              <div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                <span style={{ width: `${percent}%` }} />
              </div>
              <ol className="path-steps">
                {path.steps.map((stepId) => {
                  const term = getTermById(stepId);
                  const done = userData.status[stepId] === 'learned';
                  const isNext = stepId === nextStep;
                  return (
                    <li key={stepId}>
                      <span className={`step-dot ${done ? 'done' : isNext ? 'current' : ''}`} aria-hidden="true" />
                      {term != null ? (
                        <a href={`#/term/${term.id}`}>{term.name}</a>
                      ) : (
                        <span>{stepId}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
              {nextTerm != null && (
                <a className="btn primary" href={`#/term/${nextTerm.id}`}>
                  {percent === 0 ? t(lang, 'pathStart') : t(lang, 'pathContinue')}: {nextTerm.name}
                </a>
              )}
              {percent === 100 && (
                <span className="badge badge-beginner">✓ {t(lang, 'pathDone')}</span>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
