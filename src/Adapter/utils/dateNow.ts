let lastNow = -Infinity;

export default function now() {
  let now = Date.now();

  if (lastNow >= now) {
    now = lastNow + 1;
  }

  lastNow = now;

  return now;
}
