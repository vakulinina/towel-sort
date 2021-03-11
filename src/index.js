
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  return matrix.flatMap((arr, index) => {
    if (index % 2) return arr.reverse();
    return arr;
  })
}
