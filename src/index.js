import log from './log';
import listen from './listener';
import commands from './commands';

if (!process.env.TELEGRAM_TOKEN) {
  log.warn('TELEGRAM_TOKEN is not defined');
  process.exit();
}

const init = async () => {
  log.info(`Loaded ${Object.keys(commands).length} commands`);
  listen(commands);
};

init();
