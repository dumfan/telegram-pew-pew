import duration from 'humanize-duration';

const start = Date.now();

const uptime = () => Date.now() - start;

export default {
  name: 'Print uptime',
  func: () => {
    const seconds = uptime();
    const uptimeText = duration(seconds);
    return `Uptime ${uptimeText}`;
  },
};
