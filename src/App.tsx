import { HashRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { usePrefs, useThemeClass, useDocumentDirection } from './hooks';
import { speech } from './lib/tts';
import { t, type StringKey } from './i18n/strings';
import HomePage from './pages/HomePage';
import GlossaryPage from './pages/GlossaryPage';
import CategoriesPage from './pages/CategoriesPage';
import TermPage from './pages/TermPage';
import FavoritesPage from './pages/FavoritesPage';
import RecentPage from './pages/RecentPage';
import PathsPage from './pages/PathsPage';
import ComparePage from './pages/ComparePage';
import ProgressPage from './pages/ProgressPage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';

// Omar's Dev Dictionary — routing shell (HashRouter).

const NAV_LINKS: { to: string; key: StringKey }[] = [
  { to: '/', key: 'navHome' },
  { to: '/glossary', key: 'navGlossary' },
  { to: '/categories', key: 'navCategories' },
  { to: '/paths', key: 'navPaths' },
  { to: '/compare', key: 'navCompare' },
  { to: '/progress', key: 'navProgress' },
  { to: '/favorites', key: 'navFavorites' },
  { to: '/recent', key: 'navRecent' },
  { to: '/settings', key: 'navSettings' },
  { to: '/about', key: 'navAbout' }
];

function Nav() {
  const [prefs] = usePrefs();
  const lang = prefs.uiLang;
  const location = useLocation();
  return (
    <nav className="nav" aria-label={t(lang, 'menu')}>
      <a className="brand" href="#/">
        <span className="brand-mark" aria-hidden="true">OD</span>
        <span className="brand-name">Omar&rsquo;s Dev Dictionary</span>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <a
              href={`#${link.to}`}
              className={location.pathname === link.to ? 'active' : undefined}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {t(lang, link.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Shell() {
  const [prefs] = usePrefs();
  useThemeClass(prefs);
  useDocumentDirection(prefs);
  const location = useLocation();

  // Changing route stops any active speech (no overlap, no orphan audio).
  useEffect(() => {
    speech.stop();
  }, [location.pathname]);

  return (
    <div className="app">
      <Nav />
      <main className="content" id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/term/:id" element={<TermPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/recent" element={<RecentPage />} />
          <Route path="/paths" element={<PathsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>{t(prefs.uiLang, 'aboutOwner')}</span>
        <span aria-hidden="true">·</span>
        <span>{t(prefs.uiLang, 'aboutLocalData')}</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
