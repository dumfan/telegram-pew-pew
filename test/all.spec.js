import test from 'ava';
const { forEach } = require('lodash');
const { loadCommands } = require('../src/telegram');

test('All functions', async function(t) {
  const bar = await loadCommands('bar');
  forEach(bar, cmd => {
    t.notThrows(cmd, `${cmd} is failing`);
  });
});

test('bar', async function(t) {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});
