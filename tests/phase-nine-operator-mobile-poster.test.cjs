const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');

test('app and service worker versions are aligned', () => {
  assert.match(html, /app-version" content="1\.23\.0"/);
  assert.match(sw, /r6-cache-v37/);
  assert.match(changelog, /\[1\.23\.0\]/);
});

test('all operators is a first-class hub on desktop and mobile', () => {
  assert.match(html, /id="hub-operators"/);
  assert.match(html, /id="hub-btn-operators"/);
  assert.match(html, /id="mhub-operators"/);
  assert.match(html, /\['hq', 'ops', 'tools', 'operators'\]\.forEach/);
  assert.doesNotMatch(html, /id="operatorSelectModal"/);
});

test('operator tab keeps search, side filters, roster, and loadout IDs', () => {
  for (const id of ['opSelectSearch','opSelectAtk','opSelectDef','opRosterGrid','opHeroIcon','opPrimaryOptions','opSecondaryOptions']) {
    assert.ok(html.includes('id="' + id + '"'), id);
  }
  assert.match(html, /@media\(max-width:639\.98px\)/);
  assert.match(html, /#hub-operators \.op-roster-grid\{grid-template-columns:repeat\(4/);
});

test('poster generation finishes before actions and supports PNG blob export', () => {
  assert.match(html, /posterExportReady = true/);
  assert.match(html, /async function downloadDossierImage\(\)/);
  assert.match(html, /canvasToBlob\(canvas\)/);
  assert.match(html, /URL\.createObjectURL\(blob\)/);
  assert.match(html, /async function shareDossierNative\(\)/);
  assert.match(html, /navigator\.canShare\(\{ files: \[file\] \}\)/);
  assert.match(html, /navigator\.clipboard\?\.writeText/);
});
