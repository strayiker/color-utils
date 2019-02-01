export default (color, value) => {
  const { rgb, hsl } = color;
  const values = rgb || hsl;

  values[3] = value;

  return color;
};
