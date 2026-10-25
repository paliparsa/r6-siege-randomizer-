const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

test('Siege menu backdrop palette and atmospheric layers are present', () => {
  assert.match(html, /--siege-menu-olive:\s*#77764e/i);
  assert.match(html, /body::before\s*\{/);
  assert.match(html, /repeating-linear-gradient\(135deg/);
  assert.match(html, /background-attachment:\s*fixed/);
});

test('app and service-worker cache versions are bumped together', () => {
  assert.match(html, /name="app-version" content="1\.18\.0"/);
  assert.match(html, /name="theme-color" content="#11130F"/);
  assert.match(sw, /r6-cache-v32/);
});

test('critical feature and storage contracts remain present', () => {
  for (const key of ['r6_profile_v2', 'r6_banned_ops_v1', 'r6_xp_claims_v1', 'r6_alpha_history_v1', 'r6_alpha_collection_v1']) {
    assert.ok(html.includes(key), `missing storage key: ${key}`);
  }
  for (const token of ['alpha-pack-bag', 'pickDuelPair', 'operatorMainCard', 'mapSelect', 'siteSelect']) {
    assert.ok(html.includes(token), `missing feature contract: ${token}`);
  }
});
