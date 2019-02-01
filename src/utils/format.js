import isNumber from './isNumber';
import num2hex from '../converters/num2hex';

const noop = v => v;
const percent = v => `${v}%`;

const maps = {
  hex: [num2hex, num2hex, num2hex, v => num2hex(v * 255)],
  hsl: [noop, percent, percent, noop],
  rgb: [noop, noop, noop, noop],
};

export default function(color) {
  if (!color || !color.isColor) {
    return color;
  }

  const { format, rgb, hsl } = color;

  let prefix = '';
  let postfix = '';
  let delimeter;
  let values;

  if (format === 'hex') {
    prefix = '#';
    delimeter = '';
    values = rgb;
  } else {
    prefix = `${format}${isNumber(hsl[3]) ? 'a' : ''}(`;
    postfix = ')';
    values = hsl;
  }

  const content = values.map((v, i) => maps[format][i](v)).join(delimeter);

  return `${prefix}${content}${postfix}`;
}
