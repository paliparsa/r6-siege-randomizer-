const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function functionSource(name, nextName) {
  const start = html.indexOf('function ' + name + '(');
  assert.notEqual(start, -1, 'missing function: ' + name);
  let end = nextName ? html.indexOf('function ' + nextName + '(', start + 1) : -1;
  if (end <= start) end = html.indexOf(String.fromCharCode(10) + '    function ', start + 1);
  assert.ok(end > start, 'could not find function boundary for: ' + name);
  return html.slice(start, end);
}

test('Main Randomizer: faction and bans constrain the pool and reveal stays wired', () => {
  const source = functionSource('triggerHqRoll', 'renderMainOperatorCard');
  assert.match(source, /OPERATORS\.filter/);
  assert.match(source, /!bannedOpIds\.includes\(o\.id\)/);
  assert.match(source, /currentFaction !== 'all'/);
  assert.match(source, /getRandomItem\(pool\)/);
  assert.match(source, /card-flipping/);
  assert.match(source, /scanning/);
  assert.doesNotMatch(source, /operatorSelectId|confirmOperatorSelect/);
});

test('Squad: side and bans remain enforced; five-operator minimum and report remain', () => {
  const source = functionSource('rollFullSquad', 'renderSquadGrid');
  assert.match(source, /currentFaction==='def'\?'def':'atk'/);
  assert.match(source, /!bannedOpIds\.includes\(o\.id\)/);
  assert.match(source, /pool\.length<5/);
  assert.match(source, /selectSquadForDoctrine\\(pool,currentSquadDoctrine\\)/);
  assert.match(source, /renderSquadGrid/);
  assert.match(html, /id="squadIntelReport"/);
});

test('Duo Synergy: selects from the active filtered combo pool and keeps analysis/XP', () => {
  const source = functionSource('rollDuoCombo', 'shareTextPayload');
  assert.match(source, /duoFilteredPool\(\)/);
  assert.match(source, /getRandomItem\(pool\)/);
  assert.match(source, /currentDuoCombo=combo/);
  assert.match(source, /renderDuoAnalysis\(combo\)/);
  assert.match(source, /duoConfirmXpBtn/);
});

test('Duel Arena: always pairs an attacker against a defender, respects bans, handles empty pools', () => {
  const start = html.indexOf('function pickDuelPair(');
  const end = html.indexOf('function rollDuelMatch(', start);
  assert.ok(start >= 0 && end > start, 'Duel pair helper must be independently testable');
  const context = { getRandomItem: pool => pool[0] };
  vm.runInNewContext(html.slice(start, end), context);
  const operators = [
    { id: 'a1', side: 'atk' }, { id: 'a2', side: 'atk' },
    { id: 'd1', side: 'def' }, { id: 'd2', side: 'def' }
  ];
  for (let i = 0; i < 100; i++) {
    const pair = context.pickDuelPair(operators, [], pool => pool[Math.floor(Math.random() * pool.length)]);
    assert.ok(pair);
    assert.equal(pair.p1.side, 'atk');
    assert.equal(pair.p2.side, 'def');
  }
  assert.equal(context.pickDuelPair(operators, ['a1'], pool => pool[0]).p1.id, 'a2');
  assert.equal(context.pickDuelPair(operators, ['d1'], pool => pool[0]).p2.id, 'd2');
  assert.equal(context.pickDuelPair(operators.filter(o => o.side !== 'atk'), [], pool => pool[0]), null);
  assert.equal(context.pickDuelPair(operators.filter(o => o.side !== 'def'), [], pool => pool[0]), null);
  const roll = functionSource('rollDuelMatch', 'shareDuelMatch');
  assert.match(roll, /pickDuelPair\(OPERATORS, bannedOpIds\)/);
  assert.match(roll, /if \(!pair\)/);
});

test('All six modes have scoped presentation states and legacy feature markers remain', () => {
  for (const mode of ['standard', 'cursed', 'squad']) assert.ok(html.includes('body[data-hq-mode="' + mode + '"]'));
  for (const mode of ['strats', 'duo', 'duel']) assert.ok(html.includes('body[data-ops-mode="' + mode + '"]'));
  assert.match(html, /prefers-reduced-motion/);
  for (const id of ['hub-hq', 'hub-ops', 'hub-tools', 'duelTournamentBoard', 'squadIntelReport', 'alphaModal', 'globalPosterButton']) {
    assert.ok(html.includes('id="' + id + '"'), 'missing preserved feature marker: ' + id);
  }
  assert.match(html, /data-hq-mode="standard" data-ops-mode="strats"/);
});
