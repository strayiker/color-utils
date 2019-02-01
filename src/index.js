import make from './utils/make';
import darken from './darken';
import getLuminance from './getLuminance';
import lighten from './lighten';
import setAlpha from './setAlpha';

exports.darken = make(darken);
exports.getLuminance = make(getLuminance);
exports.lighten = make(lighten);
exports.setAlpha = make(setAlpha);
