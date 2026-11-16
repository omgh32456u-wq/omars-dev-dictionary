# Omar's Dev Dictionary

A premium educational programming dictionary and learning platform — in English and Arabic.

**Owner:** Omar Mohamed
**Version:** 1.0.0

## What it is

Omar's Dev Dictionary explains programming concepts, development tools, technologies, and workflows with:

- **250+ distinct terms** across six categories (Programming Fundamentals, Web Development, Tools & Workflow, Databases & Backend, Software Engineering & Architecture, Mobile & Modern Technologies).
- **Full explanations** per term: precise definition, beginner-friendly simple explanation, how it works, a runnable example with code, analogy, common mistakes, and when to use it.
- **English + Arabic**: complete Modern Standard Arabic (MSA) baseline for every term, with natural Egyptian and Saudi dialect overrides on selected terms, falling back per-section to MSA, then English.
- **Search**: exact and partial English names, term ids, Arabic queries (with normalization), category and difficulty filters, and sorting — fast over 250+ terms via a prebuilt index.
- **Audio**: per-section text-to-speech through the browser's Web Speech API, with honest voice availability reporting per device.
- **Learning paths**: 8 ordered paths from Programming Fundamentals to Modern Development Workflow.
- **Progress**: favorites, recently viewed, and learned/learning status — all stored locally.
- **Diagrams**: 10 responsive SVG diagrams (Git areas, branch & merge, HTTP lifecycle, API request, auth flow, CI/CD, DB relations, React state, and more) linked to their terms.
- **PWA**: installable, offline-capable app shell with all content bundled.

## Tech content stack

- React 18 + TypeScript (strict) + Vite
- React Router (HashRouter)
- vite-plugin-pwa
- Web Speech API behind a `SpeechProvider` abstraction
- Local-first persistence (`odd:prefs:v1`, `odd:user:v1`)
- Node test runner + tsx, ESLint with TypeScript + React Hooks rules

## Install and run

Requires Node.js 20+.

```bash
npm install
npm run dev        # development server
npm test           # full test suite
npm run typecheck  # strict TypeScript check
npm run lint       # ESLint
npm run build      # production build (typecheck + Vite + PWA output)
npm run preview    # serve the production build locally
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm test` | Run all tests with Node's built-in runner |
| `npm run typecheck` | `tsc --noEmit` with strict settings |
| `npm run lint` | ESLint (TS + React Hooks) |
| `npm run build` | Typecheck, then production build with PWA |
| `npm run preview` | Preview the built app |

## Languages and dialects

- Interface language: English or Arabic (full RTL layout).
- Explanation language: follow interface language, or force English / Arabic independently.
- Arabic dialect: Modern Standard Arabic (complete baseline), Egyptian Arabic, or Saudi Arabic — with the fallback chain `ar-eg`/`ar-sa` → `ar-msa` → `en` resolved **per section**.
- Technical names (Git, API, JavaScript, Commit, ...) always keep their English spelling in every language, enforced by tests.

## Data and privacy

All data — preferences, favorites, recently viewed, learning progress — is stored **locally in your browser** under the keys `odd:prefs:v1` and `odd:user:v1`. This version has no backend, no account, and no cloud sync. Changing language, dialect, or theme never erases your learning data.

## Deploy

The production build is a fully static site in `dist/`. Any static host works (GitHub Pages, Netlify, Vercel, or any web server). Because the app uses HashRouter, no server-side rewrite rules are required.

## Repository layout

```
src/
  types.ts               # shared content model
  data/                  # terms (by category), meta, paths
  lib/                   # store, prefs, user, content, tts
  i18n/                  # UI strings (en + ar)
  pages/                 # 11 route pages
  components/            # diagrams, term cards, helpers
  hooks.ts               # shared React hooks
tests/                   # content, search, i18n, storage, speech tests
```

## License

All rights reserved by Omar Mohamed.
