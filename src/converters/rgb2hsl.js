export default function(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    if (max === r) {
      h = (g - b) / delta + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  }

  h *= 60;
  s *= 100;
  l *= 100;

  return [Math.round(h), Math.round(s), Math.round(l)];
}
