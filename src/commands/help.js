const { parseArgs, loadCommands } = require('../helpers');
const { forEach } = require('lodash');

module.exports = {
  name: 'Help', // max 20 chars
  info: 'derrrr',
  func: (msg, done) => {
    if (msg && msg.text) {
      const args = parseArgs(msg.text);
      loadCommands().then(commands => {
        if (args[0] && commands[args[0]]) {
          const cmd = commands[args[0]];
          done(`${cmd.name} - ${cmd.info || 'No description'}`);
        } else {
          const array = ['All commands:', 'Use `/help cmd` to learn more about `cmd`'];
          forEach(commands, (obj, name) => {
            array.push(`./${name} - ${obj.name}`);
          });
          done(array.join('\n'));
        }
      });
    }
  },
};
