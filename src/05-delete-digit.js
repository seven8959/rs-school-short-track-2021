/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitToArr = n.toString().split('');
  let min = digitToArr[0];
  digitToArr.forEach((el) => {
    if (el < min) {
      min = el;
    }
  });
  digitToArr.splice(digitToArr.indexOf(min), 1);
  return Number(digitToArr.join(''));
}
module.exports = deleteDigit;
