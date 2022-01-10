module.exports = function reverse (n) {
  let str = n.toString();
  let i = 0;
  let result = '';

  while (i < str.length) {
    str[i] !== '-' ? result = `${str[i]}${result}` : result = `${result}`;
      i++;
  }
  return result * 1;
}
