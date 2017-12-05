import { VM } from 'vm2';

const vm = new VM();

export default {
  name: 'Execute code 😈',
  func: (msg, done) => {
    if (msg && msg.text) {
      try {
        const result = vm.run(msg.args);
        done(result);
      } catch (e) {
        done(e.message);
      }
    }
    return false;
  },
};
