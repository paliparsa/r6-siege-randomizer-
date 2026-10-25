import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(here, '../index.html'), 'utf8');

test('operator hub renders its roster and profile on first navigation', () => {
  assert.match(html, /if \(hubId === 'operators'\)[\s\S]*?renderOperatorRoster\(\);[\s\S]*?renderOperatorProfile\(\);/);
});
test('Duo and Duel create their initial result on first entry only', () => {
  assert.match(html, /mode === 'duo' && !currentDuoCombo[\s\S]*?rollDuoCombo\(\)/);
  assert.match(html, /mode === 'duel' && !currentDuelMatch[\s\S]*?rollDuelMatch\(\)/);
});
test('version and service worker cache are bumped together', () => {
  assert.match(html, /app-version" content="1\.26\.0"/);
  const sw = fs.readFileSync(path.join(here, '../sw.js'), 'utf8');
  assert.match(sw, /r6-cache-v40/);
});
