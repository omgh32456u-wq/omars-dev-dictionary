import test from 'node:test';
import assert from 'node:assert';
import { createStore, memoryBackend, unwrap, type Backend } from '../src/lib/store';
import { migratePrefs, defaultPrefs, type Prefs } from '../src/lib/prefs';
import {
  migrateUserData,
  defaultUserData,
  toggleFavorite,
  pushRecent,
  setTermStatus,
  countByStatus,
  MAX_RECENTS,
  type UserData
} from '../src/lib/user';

// Omar's Dev Dictionary — persistence tests.

function freshBackend(): Backend {
  return memoryBackend();
}

test('prefs survive write and read (simulated reload)', () => {
  const backend = freshBackend();
  const store = createStore<Prefs>('odd:prefs:v1', migratePrefs, () => defaultPrefs, backend);
  store.write({ ...defaultPrefs, uiLang: 'ar', theme: 'dark', speechRate: 1.5 });
  const store2 = createStore<Prefs>('odd:prefs:v1', migratePrefs, () => defaultPrefs, backend);
  const reloaded = store2.read();
  assert.ok(reloaded != null);
  assert.strictEqual(reloaded.uiLang, 'ar');
  assert.strictEqual(reloaded.theme, 'dark');
  assert.strictEqual(reloaded.speechRate, 1.5);
});

test('changing prefs does not erase user data', () => {
  const backend = freshBackend();
  const prefsStore = createStore<Prefs>('odd:prefs:v1', migratePrefs, () => defaultPrefs, backend);
  const userStore = createStore<UserData>('odd:user:v1', migrateUserData, () => defaultUserData, backend);
  userStore.write(toggleFavorite(defaultUserData, 'git'));
  prefsStore.write({ ...defaultPrefs, uiLang: 'ar' });
  assert.deepStrictEqual(userStore.read()?.favorites, ['git']);
});

test('favorites toggle adds then removes', () => {
  let data = toggleFavorite(defaultUserData, 'git');
  assert.deepStrictEqual(data.favorites, ['git']);
  data = toggleFavorite(data, 'api');
  assert.deepStrictEqual(data.favorites, ['git', 'api']);
  data = toggleFavorite(data, 'git');
  assert.deepStrictEqual(data.favorites, ['api']);
});

test('recents keep most recent first with no duplicates', () => {
  let data = pushRecent(defaultUserData, 'git');
  data = pushRecent(data, 'api');
  data = pushRecent(data, 'git');
  assert.deepStrictEqual(data.recents, ['git', 'api']);
});

test('recents are capped at the limit', () => {
  let data = defaultUserData;
  for (let i = 0; i < MAX_RECENTS + 5; i += 1) {
    data = pushRecent(data, `term-${i}`);
  }
  assert.strictEqual(data.recents.length, MAX_RECENTS);
  assert.strictEqual(data.recents[0], `term-${MAX_RECENTS + 4}`);
});

test('learned status sets a timestamp; clearing removes it', () => {
  let data = setTermStatus(defaultUserData, 'git', 'learned');
  assert.strictEqual(data.status.git, 'learned');
  assert.ok(data.learnedAt.git != null);
  data = setTermStatus(data, 'git', 'learning');
  assert.strictEqual(data.status.git, 'learning');
  assert.ok(data.learnedAt.git == null);
  data = setTermStatus(data, 'git', 'none');
  assert.ok(data.status.git == null);
  assert.ok(data.learnedAt.git == null);
});

test('countByStatus counts learned and learning separately', () => {
  let data = setTermStatus(defaultUserData, 'git', 'learned');
  data = setTermStatus(data, 'api', 'learning');
  assert.deepStrictEqual(countByStatus(data), { learned: 1, learning: 1 });
});

test('corrupted storage falls back safely instead of crashing', () => {
  const backend = freshBackend();
  backend.setItem('odd:prefs:v1', '{not json');
  const store = createStore<Prefs>('odd:prefs:v1', migratePrefs, () => defaultPrefs, backend);
  assert.deepStrictEqual(store.read() ?? defaultPrefs, defaultPrefs);
});

test('legacy unwrapped data shape is still readable (backward compatibility)', () => {
  const legacy = { v: 1, data: { uiLang: 'ar' } };
  assert.strictEqual(unwrap(legacy), legacy.data);
  const rawShape = { uiLang: 'ar' };
  assert.strictEqual(unwrap(rawShape), rawShape);
});
