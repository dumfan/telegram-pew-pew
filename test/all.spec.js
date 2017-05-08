import { forEach } from 'lodash';
import { commands } from '../src/commands';

test('adds 1 + 2 to equal 3', () => {
  expect(3).toBe(3);
});

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

test('All functions', () => {
  forEach(commands, (obj) => {
    expect(obj.name).toBeTruthy();
    expect(obj.func).not.toThrow();
    expect(() => obj.func(msg1, () => {})).not.toThrow();
  });
});
