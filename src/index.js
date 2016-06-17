const { loadCommands } = require('./helpers');
const listen = require('./listener');

loadCommands().then(listen);
