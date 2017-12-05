import { getCommand, parseArgs } from '../src/helpers';

const string = '/haddock@botfan wibron är cool';

test('parse()', () => {
  const parsed = getCommand(string);
  expect(parsed).toBe('haddock');
});

test('parseArgs()', () => {
  const parsed = parseArgs(string);
  expect(parsed).toEqual(['wibron', 'är', 'cool']);
  expect(parseArgs('')).toEqual([]);
});
