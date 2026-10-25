const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

test('Siege UI color roles use graphite, light text, and signal yellow', () => {
  assert.match(html, /--siege-bg-canvas:\s*#111315/i);
  assert.match(html, /--siege-bg-panel:\s*#191c1e/i);
  assert.match(html, /--siege-accent:\s*#d6e04b/i);
  assert.match(html, /\.ds-control--primary\s*\{/);
  assert.match(html, /#profileModal/);
});

test('version and offline cache are in sync', () => {
  assert.match(html, /name="app-version" content="1\.19\.0"/);
  assert.match(sw, /r6-cache-v33/);
});

test('feature and storage contracts remain in source', () => {
  for (const key of ['r6_profile_v2', 'r6_banned_ops_v1', 'r6_xp_claims_v1', 'r6_alpha_history_v1', 'r6_alpha_collection_v1']) {
    assert.ok(html.includes(key), `missing storage key: ${key}`);
  }
  for (const token of ['pickDuelPair', 'operatorSelectModal', 'alphaModal', 'mapSelect', 'siteSelect']) {
    assert.ok(html.includes(token), `missing feature contract: ${token}`);
  }
});
