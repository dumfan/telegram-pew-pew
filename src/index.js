const log = require('./log');

if (!process.env.TELEGRAM_TOKEN) {
  log.warn('TELEGRAM_TOKEN is not defined');
  process.exit();
}

const { loadCommands } = require('./helpers');
const listen = require('./listener');

loadCommands().then(listen);
