const start = Date.now();

const secondsToHms = _d => {
  const d = Math.max(Number(_d / 1000), 0);
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : '';
  const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
  return hDisplay + mDisplay + sDisplay;
};

const uptime = () => Date.now() - start;

export default {
  name: 'Print uptime',
  func: () => {
    const seconds = uptime();
    const uptimeText = secondsToHms(seconds);
    const since = new Date(start);
    return `Uptime: ${uptimeText} (since ${since})`;
  },
};
