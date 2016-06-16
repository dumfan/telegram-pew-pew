import test from 'ava';
import help from '../src/commands/help';

test('help', async function(t) {
  help.func({
    text: 'asdf',
  }, () => {
    t.pass();
  });
});
