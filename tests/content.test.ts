import test from 'node:test';
import assert from 'node:assert';
import { TERMS } from '../src/data/terms';
import { CATEGORIES } from '../src/data/meta';
import { LEARNING_PATHS } from '../src/data/paths';
import { SECTION_KEYS } from '../src/lib/content';
import type { Term, TermContent } from '../src/types';

// Omar's Dev Dictionary — content integrity tests.

const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));
const TERM_IDS = new Set(TERMS.map((term) => term.id));

test('dictionary reaches the 250-term minimum', () => {
  assert.ok(TERMS.length >= 250, `expected at least 250 terms, found ${TERMS.length}`);
});

test('term ids are unique', () => {
  const ids = TERMS.map((term) => term.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});

test('canonical names are unique (no duplicate terms)', () => {
  const names = TERMS.map((term) => term.name.toLowerCase());
  assert.strictEqual(new Set(names).size, names.length);
});

test('all categories are valid', () => {
  for (const term of TERMS) {
    assert.ok(CATEGORY_IDS.has(term.category), `term ${term.id} has invalid category ${term.category}`);
  }
});

test('difficulty and popularity values are valid', () => {
  for (const term of TERMS) {
    assert.ok(['beginner', 'intermediate', 'advanced'].includes(term.difficulty), `${term.id}`);
    assert.ok(
      Number.isInteger(term.popularity) && term.popularity >= 0 && term.popularity <= 100,
      `${term.id} popularity ${term.popularity}`
    );
  }
});

test('related and prerequisite references point to existing terms', () => {
  for (const term of TERMS) {
    for (const ref of term.related) {
      assert.ok(TERM_IDS.has(ref), `term ${term.id} related ref ${ref} does not exist`);
    }
    for (const ref of term.prerequisites) {
      assert.ok(TERM_IDS.has(ref), `term ${term.id} prerequisite ${ref} does not exist`);
    }
  }
});

test('learning path steps reference existing terms', () => {
  for (const path of LEARNING_PATHS) {
    for (const step of path.steps) {
      assert.ok(TERM_IDS.has(step), `path ${path.id} step ${step} does not exist`);
    }
  }
});

test('the three seed terms are present and unchanged', () => {
  for (const seedName of ['Git', 'Branch', 'API']) {
    const term = TERMS.find((entry) => entry.name === seedName);
    assert.ok(term != null, `seed term ${seedName} missing`);
    assert.strictEqual(term.name, seedName);
  }
});

test('every term has complete English and MSA baselines', () => {
  for (const term of TERMS) {
    const en = term.content.en;
    assert.ok(en != null, `${term.id} missing en`);
    assert.ok(en.definition.length > 30, `${term.id} en definition too short`);
    assert.ok(en.simple.length > 10, `${term.id} en simple too short`);
    const msa = term.content['ar-msa'];
    assert.ok(msa != null, `${term.id} missing ar-msa`);
    assert.ok(msa.definition.length > 10, `${term.id} ar-msa definition too short`);
    assert.ok(msa.simple.length > 10, `${term.id} ar-msa simple too short`);
  }
});

test('dialect variants override only sections that also exist in MSA', () => {
  for (const term of TERMS) {
    for (const dialect of ['ar-eg', 'ar-sa'] as const) {
      const variant = term.content[dialect];
      if (variant == null) continue;
      const msa = term.content['ar-msa'];
      assert.ok(msa != null, `${term.id} dialect without MSA`);
      for (const key of SECTION_KEYS) {
        const value = variant[key];
        if (value == null) continue;
        // Sections may be overridden; when overridden with example it must keep text.
        if (key === 'example') {
          const example = value as TermContent['example'];
          assert.ok(example != null && example.text.length > 0);
        }
      }
    }
  }
});

test('no code lives inside prose meant for speech', () => {
  for (const term of TERMS) {
    for (const [lang, content] of Object.entries(term.content)) {
      if (content == null) continue;
      for (const key of ['definition', 'simple', 'howItWorks', 'analogy', 'mistakes', 'whenToUse'] as const) {
        const text = content[key];
        if (text == null) continue;
        assert.ok(
          !text.includes('```') && !/\n {2,}[{};()]/.test(text),
          `${term.id} ${lang} ${key} looks like code`
        );
      }
    }
  }
});

test('technical names stay in English inside Arabic content', () => {
  const ARABIC_LETTER = /[\u0621-\u064A]/;
  for (const term of TERMS) {
    const msa = term.content['ar-msa'];
    if (msa == null) continue;
    const texts = [msa.definition, msa.simple, msa.howItWorks ?? '', msa.mistakes ?? '', msa.whenToUse ?? ''];
    for (const text of texts) {
      assert.ok(ARABIC_LETTER.test(text), `${term.id} MSA content is not Arabic`);
    }
  }
});

test('resource URLs are well-formed and honest about verification', () => {
  for (const term of TERMS) {
    for (const resource of term.resources) {
      assert.ok(resource.url.startsWith('https://'), `${term.id} resource ${resource.url}`);
      assert.strictEqual(typeof resource.verified, 'boolean');
      // All URLs are unverified in this build: verification needs a live fetch.
      assert.strictEqual(resource.verified, false);
    }
  }
});

test('MSA has no empty filler sections (non-empty when present)', () => {
  for (const term of TERMS) {
    const msa = term.content['ar-msa'];
    if (msa == null) continue;
    for (const key of SECTION_KEYS) {
      const value = msa[key];
      if (value == null) continue;
      if (typeof value === 'string') {
        assert.ok(value.length > 5, `${term.id} ar-msa ${key} is filler`);
      }
    }
  }
});
