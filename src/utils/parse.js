import assert from './assert';
import isNumber from './isNumber';

function hexColor(color) {
  const hexValues = color.substr(1);
  const tokenLength = hexValues.length < 6 ? 1 : 2;
  const regExp = new RegExp(`[\\da-f]{${tokenLength}}`, 'gi');

  return hexValues.match(regExp).map((v, i) => {
    const c = parseInt(v.padEnd(2, v), 16);
    // convert alpha to [0,1]
    return i < 3 ? c : c / 255;
  });
}

function fnColor(color) {
  const start = color.indexOf('(');
  const values = color
    .substring(start + 1, color.length - 1)
    .split(',')
    .map(value => parseFloat(value))
    .filter(isNumber);

  return values;
}

export default function(color) {
  let model;
  let format;
  let values;

  if (color.startsWith('#')) {
    model = 'rgb';
    format = 'hex';
    values = hexColor(color);
  } else if (color.startsWith('rgb')) {
    model = 'rgb';
    format = 'rgb';
    values = fnColor(color);
  } else if (color.startsWith('hsl')) {
    model = 'hsl';
    format = 'hsl';
    values = fnColor(color);
  }

  assert(
    values.length > 2,
    /* istanbul ignore if */
    process.env.NODE_ENV !== 'production' && `Unsupported color: ${color}.`
  );

  return {
    format,
    [model]: values,
    isColor: true,
  };
}
