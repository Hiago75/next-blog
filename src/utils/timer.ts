export const timer = (callback: () => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  let start: number;
  let remaining = delay;

  function resume() {
    start = new Date().getTime();

    timerId = setTimeout(() => {
      remaining = delay;
      callback();
    }, remaining);
  }

  function pause() {
    clearInterval(timerId);
    const pausedAt = new Date().getTime();

    remaining -= pausedAt - start;

    console.log('Paused the ' + name + ' ' + timerId + ' counter, remains ' + remaining + ' ms');
  }

  return { pause, resume };
};
