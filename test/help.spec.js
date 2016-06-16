import test from 'ava';
import help from '../src/commands/help';

test('help', async function(t) {
  const done = () => t.pass();
  help.func({ text: 'asdf' }, done);
});
