const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

test('v1.21.0 has interaction locks and reduced-motion support', () => {
  assert.match(html, /name="app-version" content="1\.21\.0"/);
  assert.match(html, /function beginRandomize\(/);
  assert.match(html, /function endRandomize\(/);
  for (const key of ['hq', 'duo', 'duel', 'strat', 'map']) assert.ok(html.includes("beginRandomize('" + key + "'"), 'missing randomize lock: ' + key);
  assert.match(html, /prefers-reduced-motion: reduce/);
  assert.match(html, /function reducedMotionPreferred\(/);
  assert.match(sw, /r6-cache-v35/);
});

test('image, mobile, and preserved game contracts remain present', () => {
  assert.match(html, /function tuneDynamicImage\(/);
  assert.match(html, /@media \(max-width: 420px\)/);
  for (const token of ['pickDuelPair', 'rollFullSquad', 'rollDuoCombo', 'rollDuelMatch', 'rollRandomStrat', 'rollMapAndSite', 'openAlphaPackNow']) {
    assert.ok(html.includes(token), 'missing feature: ' + token);
  }
  for (const key of ['r6_profile_v2', 'r6_banned_ops_v1', 'r6_xp_claims_v1', 'r6_alpha_history_v1', 'r6_alpha_collection_v1', 'r6_intro_seen_v7']) {
    assert.ok(html.includes(key), 'missing storage key: ' + key);
  }
});
