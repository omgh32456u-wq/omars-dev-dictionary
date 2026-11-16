import test from 'node:test';
import assert from 'node:assert';
import { LEARNING_PATHS } from '../src/data/paths';
import { TERMS } from '../src/data/terms';
import { getTermById, resolveContent } from '../src/lib/content';
import { contentVariantFor } from '../src/hooks';

// Omar's Dev Dictionary — learning path and navigation tests.

const TERM_IDS = new Set(TERMS.map((term) => term.id));

test('the required learning paths all exist', () => {
  const required = [
    'programming-fundamentals',
    'web-development-fundamentals',
    'javascript-learning-path',
    'git-and-version-control',
    'frontend-development',
    'backend-and-apis',
    'database-fundamentals',
    'modern-development-workflow'
  ];
  const ids = new Set(LEARNING_PATHS.map((path) => path.id));
  for (const id of required) {
    assert.ok(ids.has(id), `missing required path ${id}`);
  }
});

test('path steps are ordered, unique, and all resolve', () => {
  for (const path of LEARNING_PATHS) {
    assert.ok(path.steps.length >= 5, `path ${path.id} too short`);
    assert.strictEqual(new Set(path.steps).size, path.steps.length, `path ${path.id} has duplicate steps`);
    for (const step of path.steps) {
      assert.ok(TERM_IDS.has(step), `path ${path.id} step ${step} does not exist`);
    }
  }
});

test('paths are navigable: every step resolves content in both languages', () => {
  for (const path of LEARNING_PATHS) {
    for (const step of path.steps) {
      const term = getTermById(step);
      assert.ok(term != null);
      const en = resolveContent(term, 'en');
      assert.ok(en.definition.text.length > 0, `step ${step} has no English definition`);
      const msa = resolveContent(term, 'ar-msa');
      assert.ok(msa.definition.text.length > 0, `step ${step} has no MSA definition`);
    }
  }
});

test('unknown term page data resolves to undefined (renders not-found)', () => {
  assert.strictEqual(getTermById('this-term-does-not-exist'), undefined);
});

test('the fallback chain resolves per section', () => {
  // A term with no ar-sa content resolves its Arabic from MSA.
  const loop = getTermById('loops');
  assert.ok(loop != null);
  const saResolved = resolveContent(loop, 'ar-sa');
  assert.strictEqual(saResolved.definition.lang, 'ar-msa');
  // English request never falls back to Arabic.
  const enResolved = resolveContent(loop, 'en');
  assert.strictEqual(enResolved.definition.lang, 'en');
});

test('dialect variant selection follows settings (pure helper)', () => {
  // explanation follows UI language by default
  assert.strictEqual(
    contentVariantFor({ uiLang: 'ar', explanationLang: 'ui', dialect: 'msa', theme: 'system', speechRate: 1 }),
    'ar-msa'
  );
  assert.strictEqual(
    contentVariantFor({ uiLang: 'en', explanationLang: 'ui', dialect: 'msa', theme: 'system', speechRate: 1 }),
    'en'
  );
  // explicit explanation language overrides the UI language
  assert.strictEqual(
    contentVariantFor({ uiLang: 'ar', explanationLang: 'en', dialect: 'eg', theme: 'system', speechRate: 1 }),
    'en'
  );
  // dialect selection
  assert.strictEqual(
    contentVariantFor({ uiLang: 'ar', explanationLang: 'ar', dialect: 'eg', theme: 'system', speechRate: 1 }),
    'ar-eg'
  );
  assert.strictEqual(
    contentVariantFor({ uiLang: 'ar', explanationLang: 'ar', dialect: 'sa', theme: 'system', speechRate: 1 }),
    'ar-sa'
  );
});
