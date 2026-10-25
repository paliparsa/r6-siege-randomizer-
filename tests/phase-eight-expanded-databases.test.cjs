const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');

test('version and service worker cache stay aligned', () => {
  assert.match(html, /app-version" content="1\.22\.0"/);
  assert.match(sw, /r6-cache-v36/);
  assert.match(changelog, /\[1\.22\.0\]/);
});

test('poster creation controls are removed from the interface', () => {
  assert.doesNotMatch(html, /id="globalPosterButton"/);
  assert.doesNotMatch(html, /onclick="exportCurrentCard\(\)"/);
});

test('equipment restriction pools are expanded', () => {
  const rules = html.match(/const CURSED_RULES = \[([\s\S]*?)\n    \];/);
  assert.ok(rules);
  assert.ok((rules[1].match(/'/g) || []).length >= 50);
  assert.match(html, /const CURSED_SCOPES = \[[^\]]{100,}\]/);
  assert.match(html, /const CURSED_MUZZLES = \[[^\]]{100,}\]/);
  assert.match(html, /const CURSED_GRIPS = \[[^\]]{100,}\]/);
});

test('Duo Synergy and Duel Arena have expanded scenario systems', () => {
  assert.match(html, /DUO_EXPANSION_PAIRS/);
  assert.match(html, /DUO_PLAN_VARIANTS/);
  assert.match(html, /const DUEL_SCENARIOS = \[/);
  assert.match(html, /function pickDuelScenario\(mode\)/);
  assert.match(html, /duelScenarioHistory/);
});

test('Duel Arena optional restrictions reuse cursed loadout pools', () => {
  assert.match(html, /id="duelSpecialRestrictionsToggle"/);
  assert.match(html, /function buildOptionalDuelRestriction\(\)/);
  assert.match(html, /getRandomItem\(CURSED_RULES\)/);
  assert.match(html, /getRandomItem\(CURSED_SCOPES\)/);
});

test('Duel Arena no longer includes win-condition copy', () => {
  assert.doesNotMatch(html, /شرط برد:/);
  assert.match(html, /هدف مهاجم:/);
  assert.match(html, /هدف مدافع:/);
});
