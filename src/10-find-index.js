/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const startArr = 0;
  const endArr = array.length - 1;
  const midArr = Math.floor((endArr - startArr) / 2);
  if (array[startArr] === value) return startArr;
  if (array[endArr] === value) return endArr;
  if (array[midArr] === value) return midArr;
  if (array[midArr] > value) {
    findIndex(array.slice(midArr, endArr));
  } else {
    findIndex(array.slice(startArr, midArr));
  }
  return array;
}

module.exports = findIndex;
