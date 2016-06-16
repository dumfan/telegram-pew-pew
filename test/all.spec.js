import test from 'ava';
const { forEach } = require('lodash');
const { loadCommands } = require('../src/telegram');

const msg1 = {
  message_id: 40,
  from:
   { id: 14798200,
     first_name: 'Max',
     last_name: 'Malm',
     username: 'maxmalm' },
  chat:
   { id: 14798200,
     first_name: 'Max',
     last_name: 'Malm',
     username: 'maxmalm',
     type: 'private' },
  date: 1466095986,
  text: '/shrug',
  entities: [{ type: 'bot_command', offset: 0, length: 6 }],
  args: [],
};

test('All functions', async function(t) {
  const bar = await loadCommands('bar');
  forEach(bar, (obj, name) => {
    t.truthy(obj.name, `No name set for ${name}`);
    t.notThrows(obj.func, `${name} function is failing`);
    t.notThrows(() => obj.func(msg1), `${name} function is failing`);
  });
});
