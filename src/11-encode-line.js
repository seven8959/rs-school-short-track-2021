/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      if (count < 1) {
        result.push(str[i]);
      } else {
        result.push(`${count + 1}${str[i]}`);
      }
      count = 0;
    }
  }

  return result.join('');
}

module.exports = encodeLine;
