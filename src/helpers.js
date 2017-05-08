import commands from './commands';

export function parse(msg) {
  return msg.split(' ')[0].split('@')[0].replace('/', '');
}

export function parseArgs(msg) {
  if (!msg || msg === '') {
    return [];
  }
  const args = msg.split(' ');
  args.shift();
  return args;
}

export function loadCommands() {
  return Promise.resolve(commands);
}
