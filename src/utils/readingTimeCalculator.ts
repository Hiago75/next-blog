export default function readingTime(text: string) {
  if (typeof text !== 'string') return;

  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
