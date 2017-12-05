export function getCommand(msg) {
  return msg.split(' ')[0].split('@')[0].replace('/', '');
}

export function parseArgs(msg = '') {
  const args = msg.split(' ').filter(Boolean);
  args.shift();
  return args;
}

export function loadCommands() {
  throw new Error('Deprecated');
}
