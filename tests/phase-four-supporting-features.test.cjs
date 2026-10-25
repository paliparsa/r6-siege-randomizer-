const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(__dirname, '..', 'sw.js'), 'utf8');

function sourceOf(name, nextName) {
  const start = html.indexOf('function ' + name + '(');
  assert.notEqual(start, -1, 'missing function ' + name);
  const end = nextName ? html.indexOf('function ' + nextName + '(', start + 1) : -1;
  assert.ok(end > start, 'missing boundary after ' + name);
  return html.slice(start, end);
}

test('Alpha Pack: guards against empty stock, consumes only after reward exists, saves and reveals', () => {
  const source = sourceOf('openAlphaPackNow', 'alphaCopyReward');
  assert.match(source, /alphaOpening/);
  assert.match(source, /userProfile\.packs\s*\|\|\s*0/);
  assert.match(source, /alphaPickReward\(\)/);
  assert.match(source, /if \(!reward\)/);
  assert.match(source, /userProfile\.packs\s*=\s*Math\.max/);
  assert.match(source, /saveProfile\(\)/);
  assert.match(source, /stage\.dataset\.state\s*=\s*'opening'/);
  assert.match(source, /stage\.dataset\.state\s*=\s*'reveal'/);
  assert.match(html, /id="alphaRewardCard"/);
  assert.match(html, /id="alphaInventoryList"/);
  assert.match(html, /id="alphaHistoryList"/);
});

test('XP and Level: existing progression calculations and daily claim key are preserved', () => {
  assert.match(html, /r6_xp_claims_v1/);
  assert.match(html, /function claimDailyXp\(/);
  assert.match(html, /function addXp\(/);
  assert.match(html, /Math\.floor\(xp \/ 200\) \+ 1/);
  assert.match(html, /function updateHeaderProgression\(/);
  assert.match(html, /id="profileRankName"/);
  assert.match(html, /id="profileXpText"/);
});

test('Inventory and History: existing storage keys and read/write paths remain', () => {
  assert.match(html, /r6_alpha_history_v1/);
  assert.match(html, /r6_alpha_collection_v1/);
  assert.match(html, /function alphaReadList\(/);
  assert.match(html, /function alphaRenderLists\(/);
  assert.match(html, /alphaReadList\(ALPHA_HISTORY_KEY\)/);
  assert.match(html, /alphaReadList\(ALPHA_COLLECTION_KEY\)/);
});

test('All existing themes and profile persistence remain available', () => {
  for (const skin of ['default', 'blackice', 'keres', 'nighthaven']) {
    assert.ok(html.includes("setSkinTheme('" + skin + "')"), 'missing theme ' + skin);
  }
  assert.match(html, /function setSkinTheme\(skinName\)/);
  assert.match(html, /userProfile\.skin\s*=\s*skinName/);
  assert.match(html, /document\.body\.setAttribute\('data-skin', skinName\)/);
  assert.match(html, /r6_profile_v2/);
  assert.match(html, /r6_banned_ops_v1/);
});

test('Map and site selection: original database, selection handlers and rendering remain', () => {
  assert.match(html, /const MAP_DATABASE\s*=/);
  assert.match(html, /onchange="selectMapByName\(this\.value\)"/);
  assert.match(html, /onchange="selectSiteByIndex\(this\.value\)"/);
  assert.match(html, /function selectMapByName\(name\)/);
  assert.match(html, /function selectSiteByIndex\(value\)/);
  assert.match(html, /function renderCurrentMapSite\(/);
  assert.match(html, /id="mapTacticalTip"/);
});

test('Poster generation and actions remain wired', () => {
  assert.match(html, /function exportCurrentCard\(/);
  assert.match(html, /function exportContextPoster\(/);
  assert.match(html, /function downloadDossierImage\(/);
  assert.match(html, /id="globalPosterButton"[^>]*onclick="exportCurrentCard\(\)"/);
  assert.match(html, /id="shareModal"/);
  assert.match(html, /id="dossierCanvas"/);
});

test('PWA install and offline shell remain intact', () => {
  assert.match(html, /function installWebApp\(/);
  assert.match(html, /function refreshInstallUI\(/);
  assert.match(html, /navigator\.serviceWorker\.register\('\.\/sw\.js'\)/);
  assert.match(sw, /const CACHE_NAME = 'r6-cache-v31'/);
  assert.match(sw, /const APP_SHELL = \\[/);
  for (const resource of ['./', './index.html', './manifest.json', './data/r6-weapon-data.js', './data/r6-operator-data.js']) {
    assert.ok(sw.includes("'" + resource + "'"), 'missing cached shell resource ' + resource);
  }
  assert.match(sw, /caches\.match\('\.\/index\.html'\)/);
  assert.match(sw, /self\.clients\.claim\(\)/);
});

test('Phase 4 visual polish is additive and supports mobile/reduced motion', () => {
  assert.match(html, /v1\.17\.0 — Phase 4: supporting systems/);
  assert.match(html, /#profileModal #profileRankName/);
  assert.match(html, /#mapTacticalTip/);
  assert.match(html, /#alphaModal \.alpha-history-row:hover/);
  assert.match(html, /@media \(max-width: 639\.98px\)/);
  assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(html, /meta name="app-version" content="1\.17\.0"/);
});
