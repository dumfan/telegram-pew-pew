import log from './log';
import listen from './listener';
import { loadCommands } from './helpers';

if (!process.env.TELEGRAM_TOKEN) {
  log.warn('TELEGRAM_TOKEN is not defined');
  process.exit();
}

loadCommands().then(cmds => {
  log.info(`Loaded ${Object.keys(cmds).length} commands`);
  listen(cmds);
});
