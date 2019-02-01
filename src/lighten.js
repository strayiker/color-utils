export default (color, value) => {
  const { rgb, hsl } = color;

  if (rgb) {
    color.rgb = rgb.map(v => v * (1 + value));
  } else {
    hsl[2] *= 1 + value;
  }

  return color;
};
