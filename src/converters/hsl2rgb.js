export default function(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  return [f(0) * 255, f(8) * 255, f(4) * 255];
}
