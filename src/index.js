module.exports = function reverse(n) {
  const numStr = Math.abs(n).toString();
  const reversedStr = numStr.split('').reverse().join('');
  const result = parseInt(reversedStr, 10);
  return result;
};
