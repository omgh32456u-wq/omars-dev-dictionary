import test from 'node:test';
import assert from 'node:assert';
import { normalizeQuery, searchTerms, getTermById } from '../src/lib/content';

// Omar's Dev Dictionary — search tests.

test('exact English name search ranks the term first', () => {
  const results = searchTerms('git');
  assert.ok(results.length > 0);
  assert.strictEqual(results[0]?.name, 'Git');
});

test('partial English name search finds matches', () => {
  const results = searchTerms('progra');
  assert.ok(results.length > 0);
  assert.ok(results.some((term) => term.name === 'Programming Fundamentals' || term.id === 'variables'));
});

test('search by term id works', () => {
  const results = searchTerms('async-await');
  assert.ok(results.some((term) => term.id === 'async-await'));
});

test('case-insensitive search', () => {
  const upper = searchTerms('GIT');
  const lower = searchTerms('git');
  assert.strictEqual(upper[0]?.id, lower[0]?.id);
});

test('Arabic search matches Arabic content', () => {
  const results = searchTerms('متغير');
  assert.ok(results.length > 0, 'expected Arabic query متغير to match');
});

test('Arabic search is normalized (hamza and taa marbuta)', () => {
  const exact = searchTerms('المتغير');
  const normalized = searchTerms('المتغير');
  assert.strictEqual(exact.length, normalized.length);
  // normalization strips harakat
  assert.strictEqual(normalizeQuery('مُتَغَيِّر'), normalizeQuery('متغير'));
});

test('category filter narrows results', () => {
  const tools = searchTerms('', { category: 'tools' });
  assert.ok(tools.length > 0);
  assert.ok(tools.every((term) => term.category === 'tools'));
});

test('difficulty filter narrows results', () => {
  const beginner = searchTerms('', { difficulty: 'beginner' });
  assert.ok(beginner.length > 0);
  assert.ok(beginner.every((term) => term.difficulty === 'beginner'));
});

test('combined filters intersect', () => {
  const results = searchTerms('', { category: 'web', difficulty: 'advanced' });
  assert.ok(results.every((term) => term.category === 'web' && term.difficulty === 'advanced'));
});

test('sorting by name is alphabetical', () => {
  const results = searchTerms('', {}, 'name');
  const names = results.map((term) => term.name);
  const sorted = [...names].sort((a, b) => a.localeCompare(b));
  assert.deepStrictEqual(names, sorted);
});

test('sorting by popularity is descending', () => {
  const results = searchTerms('', {}, 'popularity');
  for (let i = 1; i < results.length; i += 1) {
    assert.ok(results[i - 1]!.popularity >= results[i]!.popularity);
  }
});

test('no results for gibberish', () => {
  const results = searchTerms('zzzzqqq');
  assert.strictEqual(results.length, 0);
});

test('unknown term id resolves to undefined', () => {
  assert.strictEqual(getTermById('no-such-term'), undefined);
});
