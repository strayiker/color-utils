import rgb2hsl from './converters/rgb2hsl';

export default color => (color.hsl || rgb2hsl(color.rgb))[2] / 100;
