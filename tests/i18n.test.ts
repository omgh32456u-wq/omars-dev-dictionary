import test from 'node:test';
import assert from 'node:assert';
import { EN, AR, type StringKey } from '../src/i18n/strings';

// Omar's Dev Dictionary — localization tests.

test('UI translation key parity between en and ar', () => {
  const enKeys = Object.keys(EN) as StringKey[];
  const arKeys = Object.keys(AR) as StringKey[];
  assert.deepStrictEqual(
    [...enKeys].sort(),
    [...arKeys].sort(),
    'every UI key must exist in both languages'
  );
});

test('no empty translations', () => {
  for (const [key, value] of Object.entries(AR)) {
    assert.ok(typeof value === 'string' && value.length > 0, `AR key ${key} is empty`);
  }
});

test('interface language keys are LTR/RTL safe (no mixed direction in key labels)', () => {
  // English strings must not contain Arabic letters.
  for (const [key, value] of Object.entries(EN)) {
    assert.ok(!/[\u0621-\u064A]/.test(value), `EN key ${key} contains Arabic letters`);
  }
  // Arabic translations must actually contain Arabic.
  for (const [key, value] of Object.entries(AR)) {
    if (key === 'homeWelcome' || key === 'aboutPurpose' || key === 'aboutOwner') continue;
    assert.ok(/[\u0621-\u064A]/.test(value), `AR key ${key} has no Arabic text`);
  }
});

test('technical product names are never translated', () => {
  const arPurpose = AR.aboutPurpose;
  assert.ok(arPurpose.includes('Omar'), 'Arabic about text keeps the product identity');
  // The product name itself never appears translated.
  assert.ok(!AR.homeWelcome.includes('قاموس عمر'), 'product name must not be translated');
});
