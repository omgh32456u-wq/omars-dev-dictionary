# Architecture

Omar's Dev Dictionary is a local-first, offline-first educational SPA. This document describes the final architecture of the delivered code.

## Stack

React 18 + TypeScript (strict) + Vite + React Router (HashRouter) + vite-plugin-pwa. No backend, no runtime dependencies beyond React and the router.

## Layers (strict separation)

```
types.ts        content model shared by everything below
data/           pure content: terms, categories, paths (no imports from lib/)
lib/            pure logic: store, prefs, user, content resolution, speech
i18n/           UI translation strings, one key set, en + ar
components/     reusable presentation: diagrams, term cards, copy button
pages/          one component per route
hooks.ts        the bridge between lib and React (useSyncExternalStore, speech)
```

Dependency direction: `pages → components → lib → data → types`. Nothing in `lib/` or `data/` imports React (except `hooks.ts`, deliberately placed at the src root), which is exactly why the whole content and logic layer is testable with plain Node, no jsdom.

## Content resolution (the heart of multilingual support)

Each term stores `content` as `Partial<Record<LangCode, TermContent>>` where `LangCode = 'en' | 'ar-msa' | 'ar-eg' | 'ar-sa'`.

`resolveContent(term, variant)` walks the fallback chain **per section**:

```
ar-eg / ar-sa  →  ar-msa  →  en
```

So a Saudi user reading "Git" sees the Saudi `simple` override, the MSA definition, and — if a section exists only in English — the English text with an honest on-screen fallback note. Code blocks are picked from the best available variant and are **displayed, never spoken**: `speechSections()` only ever returns prose.

Technical names are canonical English everywhere. This is enforced by convention in every Arabic string and asserted in tests (Arabic content must contain Arabic letters; English UI strings must contain none).

## Persistence

Two typed observable stores over localStorage, with a safe in-memory fallback when storage is unavailable:

- `odd:prefs:v1` — interface language, explanation language, dialect, theme, speech rate.
- `odd:user:v1` — favorites, recents (capped, deduplicated), per-term status, learned timestamps.

Design points:

- **Isolation**: preferences and user data live in separate keys; changing language or theme can never erase learning data (test-enforced).
- **Migration**: each store validates its raw JSON through a `migrate` function that whitelists fields and clamps values; corrupted or legacy data degrades to defaults rather than crashing (test-enforced).
- **Observability**: stores expose `subscribe`, so React subscribes with `useSyncExternalStore` — no context providers, no global state library.

## Speech (SpeechProvider abstraction)

`src/lib/tts.ts` defines the `SpeechProvider` interface (`supported`, `getVoices`, `speak`, `pause`, `resume`, `stop`, `isPaused`) with a single implementation, `WebSpeechProvider`, over the browser Web Speech API. The UI depends only on the interface, so a different provider (e.g. a bundled offline TTS) can be swapped without touching pages.

Guarantees built into the provider:

- **Stop-before-start**: `speak()` always cancels first; two sections can never overlap.
- **Chunking**: long text is split at sentence boundaries (Arabic punctuation aware) into ~220-character utterances.
- **URL safety**: URLs are replaced with the word "link" before speaking.
- **Voice honesty**: `matchVoiceIn()` reports exactly one of `exact` locale, `language` match, or `none` — Settings displays the actual device voice list and never claims a dialect voice exists when it does not.
- **Route change stops speech**: the app shell calls `speech.stop()` on pathname change.

## Search

`src/lib/content.ts` prebuilds a normalized index (lowercased; Arabic stripped of harakat with alef/yaa/taa normalization) once per session. Query scoring: exact name (100) > name prefix (80) > name contains (60) > id (50) > body contains (25). Filters (category, difficulty) are applied before scoring so results stay O(candidates). For 250+ terms this is instant; the index is the reason search does not degrade with dictionary size.

## Routing

HashRouter with 11 routes and a catch-all redirect to Home. Hash routing means static hosting needs no rewrite rules and deep links work from the file system.

## PWA

`vite.config.ts` registers `VitePWA` with `registerType: 'autoUpdate'`, workbox precache of the built shell, and `navigateFallback` to `index.html`. All dictionary content is bundled into the JS payload, so the app is fully functional offline after first load. The manifest (name, icons, display standalone, dir auto) is generated at build time.

## Testing strategy

Node's built-in runner with tsx — no jsdom needed because the logic layers are pure:

- **content** — 250+ minimum, unique ids and names, valid categories, valid cross-references (related/prerequisites/paths), complete en+MSA baselines, no code in speech prose, honest resource verification flags.
- **search** — exact/partial/id/case/Arabic/normalized-Arabic queries, filters, sorting, empty results.
- **i18n** — en/ar key parity, direction sanity, product name never translated.
- **storage** — reload simulation, preference/user isolation, dedup, caps, corrupted-storage fallback, legacy shape compatibility.
- **speech** — locale mapping, voice-match honesty, sanitization, chunking, dialect fallback chain, code never spoken.

## What was deliberately NOT added

No backend, no auth, no cloud sync, no analytics, no paid APIs — per the product constraints. Everything runs browser-native.
