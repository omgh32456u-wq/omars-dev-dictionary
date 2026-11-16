import test from 'node:test';
import assert from 'node:assert';
import {
  matchVoiceIn,
  normalizeLocale,
  primaryLanguage,
  speechLangFor,
  prepareSpeechText,
  chunkText,
  type VoiceInfo
} from '../src/lib/tts';
import { resolveContent, speechSections } from '../src/lib/content';
import { getTermById } from '../src/lib/content';

// Omar's Dev Dictionary — speech tests (pure logic; Web Speech itself requires
// a real browser and is documented as unverified in DEVELOPMENT_STATUS.md).

const VOICES: VoiceInfo[] = [
  { name: 'Google العربية', lang: 'ar-SA' },
  { name: 'Microsoft Hoda', lang: 'ar-EG' },
  { name: 'English UK', lang: 'en-GB' },
  { name: 'English US', lang: 'en-US' }
];

test('exact locale match is reported honestly', () => {
  const match = matchVoiceIn(VOICES, 'ar-EG');
  assert.strictEqual(match.kind, 'exact');
  assert.strictEqual(match.voice?.name, 'Microsoft Hoda');
});

test('general language match is distinguished from exact', () => {
  const match = matchVoiceIn(VOICES, 'en');
  assert.strictEqual(match.kind, 'language');
  assert.ok(match.voice != null);
});

test('missing voice is reported as none, never faked', () => {
  const match = matchVoiceIn(VOICES, 'fr-FR');
  assert.strictEqual(match.kind, 'none');
  assert.strictEqual(match.voice, null);
});

test('locale normalization handles underscore and case', () => {
  assert.strictEqual(normalizeLocale('ar_EG'), 'ar-eg');
  assert.strictEqual(primaryLanguage('ar-EG'), 'ar');
});

test('speech locale maps each content variant correctly', () => {
  assert.strictEqual(speechLangFor('ar-eg'), 'ar-EG');
  assert.strictEqual(speechLangFor('ar-sa'), 'ar-SA');
  assert.strictEqual(speechLangFor('ar-msa'), 'ar');
  assert.strictEqual(speechLangFor('en'), 'en');
});

test('URLs are sanitized before speaking', () => {
  const prepared = prepareSpeechText('See https://example.com/docs for more.');
  assert.ok(!prepared.includes('https://'));
  assert.ok(prepared.includes('link'));
});

test('long text is split into speech-sized chunks', () => {
  const long = 'This is a sentence. '.repeat(30);
  const chunks = chunkText(long);
  assert.ok(chunks.length > 1);
  for (const chunk of chunks) {
    assert.ok(chunk.length <= 260, `chunk too long: ${chunk.length}`);
  }
});

test('chunking preserves sentence boundaries when possible', () => {
  const text = 'One. Two. Three.';
  const chunks = chunkText(text, 100);
  assert.deepStrictEqual(chunks, ['One. Two. Three.']);
});

test('resolved content never includes code in speakable sections', () => {
  const term = getTermById('git');
  assert.ok(term != null);
  const resolved = resolveContent(term, 'en');
  const sections = speechSections(resolved);
  assert.ok(sections.length > 0);
  for (const section of sections) {
    assert.ok(!section.text.includes('git status'), 'code leaked into speech text');
    assert.ok(!section.text.includes('```'));
  }
});

test('dialect fallback falls back to MSA then English per section', () => {
  const term = getTermById('git');
  assert.ok(term != null);
  // Git has an ar-eg simple override; definition should come from MSA.
  const egResolved = resolveContent(term, 'ar-eg');
  assert.ok(egResolved.simple.text.length > 0);
  assert.ok(egResolved.definition.text.length > 0);
  // A term with no dialect content resolves fully from MSA.
  const loopTerm = getTermById('loops');
  assert.ok(loopTerm != null);
  const loopResolved = resolveContent(loopTerm, 'ar-sa');
  assert.ok(loopResolved.definition.text.length > 10);
});
