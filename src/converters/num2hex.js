export default function(n) {
  return Math.round(n)
    .toString(16)
    .padStart(2, '0');
}
