import { stripIndents } from 'common-tags';
import commands from '../commands';

export default {
  name: 'Help', // max 20 chars
  info: 'derrrr',
  func: async (msg, done) => {
    if (msg && msg.text && done) {
      if (msg.args[0] && commands[msg.args[0]]) {
        const cmd = commands[msg.args[0]];
        done(`${cmd.name} - ${cmd.info || 'No description'}`);
      } else {
        const commandTexts = Object.entries(commands).map(([name, obj]) =>
            `/${name} - ${obj.name}`
          );
        const output = stripIndents`
            All commands:
            Use /help cmd to learn more about cmd
            ${commandTexts.join('\n')}
          `;
        done(output);
      }
    }
  },
};
