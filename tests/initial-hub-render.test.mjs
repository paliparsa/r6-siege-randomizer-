const fs = require('node:fs');
const test = require('node:test');
const assert = require('node:assert/strict');
const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('operator hub renders its roster and profile on first navigation', () => {
  assert.match(html, /if \(hubId === 'operators'\)[\s\S]*?renderOperatorRoster\(\);[\s\S]*?renderOperatorProfile\(\);/);
});
test('Duo and Duel create their initial result on first entry only', () => {
  assert.match(html, /mode === 'duo' && !currentDuoCombo[\s\S]*?rollDuoCombo\(\)/);
  assert.match(html, /mode === 'duel' && !currentDuelMatch[\s\S]*?rollDuelMatch\(\)/);
});
test('version and service worker cache are bumped together', () => {
  assert.match(html, /app-version" content="1\.26\.0"/);
  const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
  assert.match(sw, /r6-cache-v40/);
});
