import { usePrefs, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { getTermById } from '../lib/content';
import { TermList } from '../components/TermCard';

// Omar's Dev Dictionary — recently viewed page.

export default function RecentPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [userData] = useUserData();

  const terms = userData.recents
    .map((id) => getTermById(id))
    .filter((term): term is NonNullable<typeof term> => term != null);

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'recentTitle')}</h1>
        <p className="subtitle">{t(lang, 'recentEmptyBody')}</p>
      </header>
      <TermList
        terms={terms}
        lang={lang}
        emptyTitle={t(lang, 'recentEmpty')}
        emptyBody={t(lang, 'recentEmptyBody')}
      />
    </div>
  );
}
