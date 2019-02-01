export default function(assertion, message) {
  if (!assertion) {
    /* istanbul ignore next */
    throw new Error(message || 'Unsupported color.');
  }
}
