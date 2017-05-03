import { parse, parseArgs } from '../src/helpers';

const string = '/haddock@botfan wibron är cool';

test('parse()', () => {
  const parsed = parse(string);
  expect(parsed).toBe('haddock');
});

test('parseArgs()', () => {
  const parsed = parseArgs(string);
  expect(parsed).toEqual(['wibron', 'är', 'cool']);
  expect(parseArgs('')).toEqual([]);
});
