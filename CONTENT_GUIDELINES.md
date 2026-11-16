# Content Guidelines

The rules every term in Omar's Dev Dictionary follows. The test suite enforces most of these mechanically; a human review enforces the rest.

## 1. A term earns its entry

- It must be a real concept a working developer meets. No duplicates, no trivial variants ("Array" and "Arrays" would be one term; "Array" and "Linked List" are two).
- Ids are kebab-case English (`arabic-dialect`, `pull-request`), stable forever — favorites, recents, and progress reference them.
- Every term carries a category, difficulty (beginner / intermediate / advanced), and popularity (0–100 integer).

## 2. Section quality

Every term must have, at minimum:

- **definition** — a precise, technical, standalone sentence. If a dictionary editor would cross it out, rewrite it.
- **simple** — a genuinely beginner-friendly re-explanation, not the definition with shorter words. An analogy or concrete picture is encouraged.

Sections that add real value, when applicable:

- **howItWorks** — the mechanism under the hood, in prose.
- **example** — prose `text` describing the example plus optional `code` and `codeLang`. **Code never goes in prose** — prose is what speech reads aloud.
- **analogy** — only when it genuinely clarifies; never force one.
- **mistakes** — the real, common misunderstandings. Specific beats generic.
- **whenToUse** — concrete situations, with the honest counter-case where relevant (e.g. "prefer merge for shared branches").

## 3. Language rules

- **English is mandatory** for every term. **MSA (ar-msa) is mandatory** for every term — it is the complete Arabic baseline.
- Dialects (`ar-eg`, `ar-sa`) are optional overrides of selected sections. A dialect line must sound natural and educational, never a mechanical word substitution. If you cannot write a line confidently, leave it out — it will fall back to MSA.
- **Technical names never translate.** Git, Branch, Commit, API, JavaScript, Server, Database, Supabase, GitHub Actions — always their canonical English spelling, in headings, definitions, examples, search, paths, audio, and diagrams. Arabic sentences are written around them.
- Arabic content must actually contain Arabic (tested) and English UI strings must not contain Arabic (tested).

## 4. Cross-references

- `related` and `prerequisites` must reference ids that exist (tested). Before adding a reference, confirm the target term exists — never point at a planned entry.
- `prerequisites` are what a reader should know first; `related` is what to read next. Keep both short (2–5 items) and genuinely useful.

## 5. Diagrams

Diagrams teach one concept each, are pure SVG components (no animation required to understand them), scale on mobile via viewBox, and are linked from terms via `diagrams: DiagramId[]`. Labels use the interface language; technical identifiers inside diagrams stay English and LTR.

## 6. External resources

- Prefer official documentation: MDN, git-scm.com, react.dev, official platform docs.
- **Never invent a URL.** Every resource ships with `verified: false` until a human has actually opened the URL and confirmed it resolves; only then may it be flipped to `true`. The term page shows an honest "not yet verified" note next to unverified links.

## 7. Learning paths

- Steps are existing term ids (tested), ordered from fundamentals outward.
- A step is complete only when the user explicitly marks it learned — paths never auto-complete.
- One path covers one coherent journey; eight shipped (Programming Fundamentals, Web Development Fundamentals, JavaScript, Git & Version Control, Frontend, Backend & APIs, Database Fundamentals, Modern Development Workflow).

## 8. Honesty rules (product-wide)

- No fake buttons, no placeholder pages, no simulated functionality.
- Progress shows only locally recorded activity.
- Voice availability is reported exactly as the device reports it.
- About states plainly that data is local-only and not synced.
- Anything unverified is documented as unverified (see DEVELOPMENT_STATUS.md).
