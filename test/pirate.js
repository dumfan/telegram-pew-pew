import pirate from '../src/commands/pirate';

test('pirate', () => {
  expect(pirate.func({ text: 'Hello my name is Max' })).toBe('me name be Max');
  expect(pirate.func({ text: 'Jag heter Max' })).toBe('heter Max');
});
