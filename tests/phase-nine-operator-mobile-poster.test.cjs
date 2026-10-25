const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const changelog = fs.readFileSync('CHANGELOG.md', 'utf8');

test('app and service worker versions are aligned', () => {
  assert.ok(html.includes('app-version" content="1.29.0"'));
  assert.ok(sw.includes("r6-cache-v43"));
  assert.ok(changelog.includes("[1.29.0]"));
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

test('each major tab offers a context-aware poster action', () => {
  assert.equal((html.match(/onclick="exportCurrentCard\\(\\)"/g) || []).length, 4);
  assert.match(html, /if \\(currentHub === 'operators'\\)/);
});

test('poster export restores the known Blob download flow and data-URL fallback', () => {
  assert.ok(html.includes('posterExportReady = true'));
  assert.ok(html.includes('async function downloadDossierImage()'));
  assert.ok(html.includes('const blob = await canvasToBlob(canvas)'));
  assert.ok(html.includes('URL.createObjectURL(blob)'));
  assert.ok(html.includes('link.download = `R6_DOSSIER_${suffix}.png`'));
  assert.ok(html.includes('URL.revokeObjectURL(url)'));
  assert.ok(html.includes("canvas.toDataURL('image/png')"));
  assert.ok(html.includes('async function shareDossierNative()'));
  assert.ok(html.includes('navigator.canShare({ files: [file] })'));
  assert.ok(html.includes('navigator.clipboard?.writeText'));
});
