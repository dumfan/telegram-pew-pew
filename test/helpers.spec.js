import test from 'ava';
const { parse, parseArgs } = require('../src/telegram');

const string = '/haddock@botfan wibron är cool';

test('parse()', async function(t) {
  const parsed = parse(string);
  t.is(parsed, 'haddock');
});

test('parseArgs()', async function(t) {
  const parsed = parseArgs(string);
  t.deepEqual(parsed, ['wibron', 'är', 'cool']);
});
