import parse from './parse';
import format from './format';

export default function(fn) {
  return (color, ...args) => color && format(fn(parse(color), ...args));
}
