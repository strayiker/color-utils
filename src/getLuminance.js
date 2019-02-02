import hsl2rgb from './converters/hsl2rgb';

export default color => {
  const rgb = color.rgb || hsl2rgb(color.hsl);
  const [r, g, b] = rgb
    .map(c => c / 255)
    .map(c => (c < 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
