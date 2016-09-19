import test from 'ava';
import pirate from '../src/commands/pirate';

test('pirate', async function(t) {
  t.is(pirate.func({ text: 'Hello my name is Max' }), 'me name be Max');
  t.is(pirate.func({ text: 'Jag heter Max' }), 'heter Max');
});
