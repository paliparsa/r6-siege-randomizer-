const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');

test('version 1.20.0 uses one consolidated phase-7 default skin layer', () => {
  assert.match(html, /name="app-version" content="1\.20\.0"/);
  assert.match(html, /v1\.20\.0 — consolidated Siege-inspired menu system/);
  assert.doesNotMatch(html, /v1\.18\.0 — Siege menu atmosphere/);
  assert.doesNotMatch(html, /v1\.19\.0 — Siege menu UI color pass/);
  assert.match(html, /body\[data-skin="default"\] \{[\s\S]*?--theme-primary: #d3c25c/);
  assert.match(sw, /r6-cache-v34/);
});

test('theme variants and existing feature/storage contracts remain in source', () => {
  for (const skin of ['blackice', 'keres', 'nighthaven']) assert.ok(html.includes('data-skin="' + skin + '"'));
  for (const key of ['r6_profile_v2', 'r6_banned_ops_v1', 'r6_xp_claims_v1', 'r6_alpha_history_v1', 'r6_alpha_collection_v1', 'r6_intro_seen_v7']) {
    assert.ok(html.includes(key), 'missing storage key: ' + key);
  }
  for (const token of ['pickDuelPair', 'operatorSelectModal', 'alphaModal', 'mapSelect', 'siteSelect', 'setSkinTheme']) {
    assert.ok(html.includes(token), 'missing feature contract: ' + token);
  }
});
