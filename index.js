if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/color-utils');
} else {
  module.exports = require('./dist/color-utils.dev');
}
