export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function getValueFromCurve(stops, t) {
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];

    if (t >= a.pos && t <= b.pos) {
      const localT = (t - a.pos) / (b.pos - a.pos);
      return lerp(a.value, b.value, localT);
    }
  }

  return stops[stops.length - 1].value;
}

export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

export function mapRange(
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number,
  interpolation: 'smooth' | 'linean' = 'smooth',
) {
  const normalize = (value - fromMin) / (fromMax - fromMin);

  let interpolate = 0;

  switch (interpolation) {
    case 'linean':
      interpolate = normalize;
      break;
    case 'smooth':
      interpolate = smoothstep(normalize);
      break;
    default:
      interpolate = normalize;
      break;
  }

  return interpolate * (toMax - toMin) + toMin;
}

export function tween(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete: (value) => void = Function,
) {
  let startTime: number = performance.now();

  let stop: Function | null;

  let stoped = false;

  stop = () => {
    stoped = true;
  };

  const loop = (time) => {
    if (time - startTime >= duration) {
      onUpdate(to);
      onComplete(to);
      stop = null;
      return;
    }

    if (stoped) {
      stop = null;
      return;
    }

    const increaseValue = ((to - from) / duration) * (time - startTime) + from;

    const interpolate = mapRange(increaseValue, to, from, to, from);

    onUpdate(interpolate);

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);

  return stop;
}
