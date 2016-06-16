import test from 'ava';
const { parse, parseArgs } = require('../src/helpers');

const string = '/haddock@botfan wibron är cool';

test('parse()', async function(t) {
  const parsed = parse(string);
  t.is(parsed, 'haddock');
});

test('parseArgs()', async function(t) {
  const parsed = parseArgs(string);
  t.plan(2);
  t.deepEqual(parsed, ['wibron', 'är', 'cool']);
  t.deepEqual(parseArgs(''), []);
});
