function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((x, y) => (x + y));
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        result += matrix[i + 1][j];
      }
    }
  }
  return result;
}
module.exports = getMatrixElementsSum;
