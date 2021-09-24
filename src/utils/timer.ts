export const timer = (callback: () => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  let start: Date;
  let remaining = delay;

  function resume() {
    start = new Date();

    timerId = setTimeout(() => {
      remaining = delay;
      callback();
    }, remaining);
  }

  function pause() {
    clearInterval(timerId);
    remaining -= new Date().getTime() - start.getTime();
  }

  return { pause, resume };
};
