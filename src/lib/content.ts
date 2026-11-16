import type { CategoryId, Difficulty, LangCode, Term, TermContent } from '../types';
import { TERMS } from '../data/terms';
import { CATEGORIES } from '../data/meta';

// Omar's Dev Dictionary — content resolution and search.
// Fallback chain: ar-eg / ar-sa → ar-msa → en (per section).

export const SECTION_KEYS = [
  'definition',
  'simple',
  'howItWorks',
  'example',
  'analogy',
  'mistakes',
  'whenToUse'
] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export interface Section {
  text: string;
  lang: LangCode;
}

export interface ResolvedExample extends Section {
  code?: string;
  codeLang?: string;
}

export interface ResolvedContent {
  definition: Section;
  simple: Section;
  howItWorks?: Section;
  example?: ResolvedExample;
  analogy?: Section;
  mistakes?: Section;
  whenToUse?: Section;
}

function chainFor(variant: LangCode): LangCode[] {
  if (variant === 'en') return ['en'];
  if (variant === 'ar-msa') return ['ar-msa', 'en'];
  return [variant, 'ar-msa', 'en'];
}

type ProseKey = 'definition' | 'simple' | 'howItWorks' | 'analogy' | 'mistakes' | 'whenToUse';

function pickProse(term: Term, variant: LangCode, key: ProseKey): Section | undefined {
  for (const lang of chainFor(variant)) {
    const content: TermContent | undefined = term.content[lang];
    const text = content?.[key];
    if (typeof text === 'string' && text.length > 0) return { text, lang };
  }
  return undefined;
}

function pickExample(term: Term, variant: LangCode): ResolvedExample | undefined {
  let text: Section | undefined;
  let code: string | undefined;
  let codeLang: string | undefined;
  let codeLangSet = false;
  for (const lang of chainFor(variant)) {
    const example = term.content[lang]?.example;
    if (example == null) continue;
    if (text == null && example.text.length > 0) text = { text: example.text, lang };
    if (!codeLangSet && example.codeLang != null) {
      codeLang = example.codeLang;
      codeLangSet = true;
    }
    if (code == null && example.code != null && example.code.length > 0) code = example.code;
    if (text != null && code != null) break;
  }
  if (text == null) return undefined;
  return { text: text.text, lang: text.lang, code, codeLang: codeLang ?? 'ts' };
}

export function resolveContent(term: Term, variant: LangCode): ResolvedContent {
  const definition = pickProse(term, variant, 'definition') ?? { text: '', lang: 'en' };
  const simple = pickProse(term, variant, 'simple') ?? { text: '', lang: 'en' };
  return {
    definition,
    simple,
    howItWorks: pickProse(term, variant, 'howItWorks'),
    example: pickExample(term, variant),
    analogy: pickProse(term, variant, 'analogy'),
    mistakes: pickProse(term, variant, 'mistakes'),
    whenToUse: pickProse(term, variant, 'whenToUse')
  };
}

/** Ordered, speakable sections (code is displayed, never spoken). */
export function speechSections(resolved: ResolvedContent): { key: SectionKey; text: string; lang: LangCode }[] {
  const out: { key: SectionKey; text: string; lang: LangCode }[] = [];
  if (resolved.definition.text) out.push({ key: 'definition', ...resolved.definition });
  if (resolved.simple.text) out.push({ key: 'simple', ...resolved.simple });
  if (resolved.howItWorks) out.push({ key: 'howItWorks', ...resolved.howItWorks });
  if (resolved.example && resolved.example.text) {
    out.push({ key: 'example', text: resolved.example.text, lang: resolved.example.lang });
  }
  if (resolved.analogy) out.push({ key: 'analogy', ...resolved.analogy });
  if (resolved.mistakes) out.push({ key: 'mistakes', ...resolved.mistakes });
  if (resolved.whenToUse) out.push({ key: 'whenToUse', ...resolved.whenToUse });
  return out;
}

// ----- Search -----

const HARAKAT = /[\u064B-\u0652\u0640]/g;

/** Case-insensitive + Arabic-normalized query/text form. */
export function normalizeQuery(text: string): string {
  return text
    .toLowerCase()
    .replace(HARAKAT, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim();
}

interface TermIndex {
  id: string;
  nameLower: string;
  hay: string;
}

let searchIndex: TermIndex[] | null = null;

function buildIndex(): TermIndex[] {
  return TERMS.map((term) => {
    const parts: string[] = [term.name, term.id, term.subcategory ?? ''];
    for (const variant of Object.values(term.content)) {
      if (variant == null) continue;
      parts.push(
        variant.definition,
        variant.simple,
        variant.howItWorks ?? '',
        variant.example?.text ?? '',
        variant.analogy ?? '',
        variant.mistakes ?? '',
        variant.whenToUse ?? ''
      );
    }
    return {
      id: term.id,
      nameLower: normalizeQuery(term.name),
      hay: normalizeQuery(parts.join(' '))
    };
  });
}

function getIndex(): TermIndex[] {
  if (searchIndex == null) searchIndex = buildIndex();
  return searchIndex;
}

export interface SearchFilters {
  category?: CategoryId | 'all';
  difficulty?: Difficulty | 'all';
}

export type SortKey = 'relevance' | 'name' | 'popularity';

const DIFFICULTY_ORDER: Record<Difficulty, number> = { beginner: 0, intermediate: 1, advanced: 2 };

function applyFilters(term: Term, filters: SearchFilters): boolean {
  if (filters.category != null && filters.category !== 'all' && term.category !== filters.category) {
    return false;
  }
  if (filters.difficulty != null && filters.difficulty !== 'all' && term.difficulty !== filters.difficulty) {
    return false;
  }
  return true;
}

function scoreTerm(index: TermIndex, query: string): number {
  if (index.nameLower === query) return 100;
  if (index.nameLower.startsWith(query)) return 80;
  if (index.nameLower.includes(query)) return 60;
  if (index.id.includes(query)) return 50;
  if (index.hay.includes(query)) return 25;
  return 0;
}

export function searchTerms(
  query: string,
  filters: SearchFilters = {},
  sort: SortKey = 'relevance'
): Term[] {
  const pool = TERMS.filter((term) => applyFilters(term, filters));
  const q = normalizeQuery(query);
  if (q.length === 0) {
    return sortPool(pool, sort === 'relevance' ? 'popularity' : sort);
  }
  const indexById = new Map(getIndex().map((entry) => [entry.id, entry]));
  const scored: { term: Term; score: number }[] = [];
  for (const term of pool) {
    const entry = indexById.get(term.id);
    if (entry == null) continue;
    const score = scoreTerm(entry, q);
    if (score > 0) scored.push({ term, score });
  }
  scored.sort((a, b) => b.score - a.score || b.term.popularity - a.term.popularity);
  return scored.map((entry) => entry.term);
}

function sortPool(pool: Term[], sort: SortKey): Term[] {
  const copy = [...pool];
  if (sort === 'name') copy.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'popularity') copy.sort((a, b) => b.popularity - a.popularity);
  else copy.sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
  return copy;
}

// ----- Dictionary helpers -----

let termMap: Map<string, Term> | null = null;

export function getTermById(id: string): Term | undefined {
  if (termMap == null) termMap = new Map(TERMS.map((term) => [term.id, term]));
  return termMap.get(id);
}

export function allTerms(): Term[] {
  return TERMS;
}

export function termsInCategory(category: CategoryId): Term[] {
  return TERMS.filter((term) => term.category === category);
}

export function countByCategory(): Record<CategoryId, number> {
  const counts = {} as Record<CategoryId, number>;
  for (const category of CATEGORIES) counts[category.id] = 0;
  for (const term of TERMS) counts[term.category] += 1;
  return counts;
}

export function relatedTerms(term: Term): Term[] {
  return term.related
    .map((id) => getTermById(id))
    .filter((t): t is Term => t != null);
}

export function prerequisiteTerms(term: Term): Term[] {
  return term.prerequisites
    .map((id) => getTermById(id))
    .filter((t): t is Term => t != null);
}

export function popularTerms(limit: number): Term[] {
  return [...TERMS].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}
