import { usePrefs, useUserData } from '../hooks';
import { t } from '../i18n/strings';
import { getTermById } from '../lib/content';
import { TermList } from '../components/TermCard';

// Omar's Dev Dictionary — favorites page.

export default function FavoritesPage() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const [userData] = useUserData();

  const terms = userData.favorites
    .map((id) => getTermById(id))
    .filter((term): term is NonNullable<typeof term> => term != null);

  return (
    <div>
      <header className="page-title">
        <h1>{t(lang, 'favoritesTitle')}</h1>
        <p className="subtitle">{t(lang, 'favoritesEmptyBody')}</p>
      </header>
      <TermList
        terms={terms}
        lang={lang}
        emptyTitle={t(lang, 'favoritesEmpty')}
        emptyBody={t(lang, 'favoritesEmptyBody')}
      />
    </div>
  );
}
