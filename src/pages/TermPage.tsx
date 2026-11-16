import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePrefs, useResolvedContent, useSpeech, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { getCategory, DIFFICULTY_LABELS } from '../data/meta';
import { getTermById, relatedTerms, prerequisiteTerms } from '../lib/content';
import { DiagramSection } from '../components/diagrams';
import { CopyButton } from '../components/audio';
import { TermCard } from '../components/TermCard';
import type { SectionKey } from '../lib/content';
import type { LangCode, Term } from '../types';

// Omar's Dev Dictionary — term details, the core learning screen.
// All hooks are called unconditionally; the missing-term branch renders after.

const SECTION_TITLES: Record<SectionKey, 'termDefinition' | 'termSimple' | 'termHowItWorks' | 'termExample' | 'termAnalogy' | 'termMistakes' | 'termWhenToUse'> = {
  definition: 'termDefinition',
  simple: 'termSimple',
  howItWorks: 'termHowItWorks',
  example: 'termExample',
  analogy: 'termAnalogy',
  mistakes: 'termMistakes',
  whenToUse: 'termWhenToUse'
};

function FallbackNote({ lang, shown }: { lang: 'en' | 'ar'; shown: LangCode }) {
  // Only flag when the user wanted Arabic but the section fell back to English.
  if (lang === 'ar' && shown === 'en') {
    return <p className="fallback-note">{t(lang, 'sectionFallbackNote')}</p>;
  }
  return null;
}

// A harmless placeholder keeping hook call order stable when the id is unknown;
// its resolved content is never rendered (the not-found branch returns first).
const PLACEHOLDER_TERM: Term = getTermById('git')!;

export default function TermPage() {
  const { id } = useParams<{ id: string }>();
  const term = id != null ? getTermById(id) : undefined;
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const resolved = useResolvedContent(term ?? PLACEHOLDER_TERM);
  const [userData, actions] = useUserData();
  const speechController = useSpeech();

  const termId = term?.id;
  useEffect(() => {
    if (termId != null) actions.pushRecent(termId);
  }, [termId, actions]);

  if (term == null) {
    return (
      <div className="empty">
        <h3>{t(lang, 'termNotFound')}</h3>
        <p>{t(lang, 'termNotFoundBody')}</p>
        <p><a className="btn" href="#/glossary">{t(lang, 'backToGlossary')}</a></p>
      </div>
    );
  }

  const category = getCategory(term.category);
  const isFavorite = userData.favorites.includes(term.id);
  const status = userData.status[term.id];
  const related = relatedTerms(term);
  const prerequisites = prerequisiteTerms(term);

  const sections: { key: SectionKey; text: string; lang: LangCode; code?: string; codeLang?: string }[] = [
    { key: 'definition', text: resolved.definition.text, lang: resolved.definition.lang },
    { key: 'simple', text: resolved.simple.text, lang: resolved.simple.lang }
  ];
  if (resolved.howItWorks != null) sections.push({ key: 'howItWorks', ...resolved.howItWorks });
  if (resolved.example != null) {
    sections.push({
      key: 'example',
      text: resolved.example.text,
      lang: resolved.example.lang,
      code: resolved.example.code,
      codeLang: resolved.example.codeLang
    });
  }
  if (resolved.analogy != null) sections.push({ key: 'analogy', ...resolved.analogy });
  if (resolved.mistakes != null) sections.push({ key: 'mistakes', ...resolved.mistakes });
  if (resolved.whenToUse != null) sections.push({ key: 'whenToUse', ...resolved.whenToUse });

  return (
    <div>
      <header className="term-header">
        <h1>{term.name}</h1>
        <span className={`badge badge-${term.difficulty}`}>
          {DIFFICULTY_LABELS[term.difficulty][lang]}
        </span>
        <span className="badge">{lang === 'ar' ? category.ar : category.en}</span>
        {term.subcategory != null && <span className="badge">{term.subcategory}</span>}
        <div className="term-actions">
          <button
            type="button"
            onClick={() => actions.toggleFavorite(term.id)}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? t(lang, 'removeFromFavorites') : t(lang, 'addToFavorites')}
          >
            {isFavorite ? '★' : '☆'} {t(lang, isFavorite ? 'removeFromFavorites' : 'addToFavorites')}
          </button>
          {status === 'learned' ? (
            <button type="button" onClick={() => actions.setStatus(term.id, 'none')}>
              ✅ {t(lang, 'clearStatus')}
            </button>
          ) : (
            <>
              <button type="button" onClick={() => actions.setStatus(term.id, 'learning')}>
                📖 {t(lang, 'markLearning')}
              </button>
              <button type="button" className="primary" onClick={() => actions.setStatus(term.id, 'learned')}>
                ✅ {t(lang, 'markLearned')}
              </button>
            </>
          )}
        </div>
      </header>

      {sections.map((section) => {
        const sectionKey = `${term.id}:${section.key}`;
        const playing = speechController.key === sectionKey && !speechController.paused;
        const paused = speechController.key === sectionKey && speechController.paused;
        return (
          <section key={section.key} className="section">
            <div className="section-head">
              <h2>{t(lang, SECTION_TITLES[section.key])}</h2>
              <div className="audio-controls">
                {speechController.supported && (
                  playing ? (
                    <>
                      <button type="button" className="small" onClick={() => speechController.pause()}>
                        ⏸ {t(lang, 'pause')}
                      </button>
                      <button type="button" className="small" onClick={() => speechController.stop()}>
                        ⏹ {t(lang, 'stop')}
                      </button>
                    </>
                  ) : paused ? (
                    <>
                      <button type="button" className="small" onClick={() => speechController.resume()}>
                        ▶ {t(lang, 'resume')}
                      </button>
                      <button type="button" className="small" onClick={() => speechController.stop()}>
                        ⏹ {t(lang, 'stop')}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        speechController.speakSection(term.id, section.key, [section.text], section.lang, prefs.speechRate)
                      }
                    >
                      🔊 {t(lang, 'play')}
                    </button>
                  )
                )}
                {!speechController.supported && (
                  <span className="speech-hint">{t(lang, 'audioUnavailable')}</span>
                )}
              </div>
            </div>
            <p>{section.text}</p>
            <FallbackNote lang={lang} shown={section.lang} />
            {section.code != null && (
              <>
                <div className="copy-row">
                  <CopyButton code={section.code} uiLang={lang} />
                </div>
                <pre className="code"><code>{section.code}</code></pre>
                {section.codeLang != null && <p className="code-lang">{section.codeLang}</p>}
              </>
            )}
          </section>
        );
      })}

      {term.diagrams != null && term.diagrams.length > 0 && (
        <DiagramSection ids={term.diagrams} lang={lang} />
      )}

      {prerequisites.length > 0 && (
        <section className="section">
          <h2>{t(lang, 'prerequisites')}</h2>
          <div className="grid cols-2">
            {prerequisites.map((p) => (
              <TermCard key={p.id} term={p} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section">
          <h2>{t(lang, 'relatedTerms')}</h2>
          <div className="grid cols-2">
            {related.map((r) => (
              <TermCard key={r.id} term={r} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {term.resources.length > 0 && (
        <section className="section">
          <h2>{t(lang, 'resources')}</h2>
          <ul>
            {term.resources.map((resource) => (
              <li key={resource.url}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="ltr">
                  {resource.label}
                </a>
                {!resource.verified && (
                  <span className="fallback-note"> — {t(lang, 'unverifiedNote')}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
