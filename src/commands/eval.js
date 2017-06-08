import { VM } from 'vm2';
import { parseArgs } from '../helpers';

const vm = new VM();

export default {
  name: 'Execute code 😈',
  func: (msg, done) => {
    if (msg && msg.text) {
      const code = parseArgs(msg.text);
      try {
        const result = vm.run(code);
        done(result);
      } catch (e) {
        done(e.message);
      }
    }
    return false;
  },
};
