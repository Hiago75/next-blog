export const timer = (callback: () => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  let start: number;
  let remaining = delay;

  function resume() {
    start = new Date().getTime();

    if (timerId) return;

    timerId = setTimeout(() => {
      remaining = delay;
      callback();
    }, remaining);
  }

  function pause() {
    clearInterval(timerId);
    timerId = undefined;
    const pausedAt = new Date().getTime();

    remaining -= pausedAt - start;
  }

  return { pause, resume };
};
