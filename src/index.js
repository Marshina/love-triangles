/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let a = 0; a < preferences.length; a++) {
    for (let b = 0; b < preferences.length; b++) {
      for (let c = 0; c < preferences.length; c++) {
        if (a === preferences[b] - 1 && b === preferences[c] - 1 && c === preferences[a] - 1) {
          count++;
        }
      }
    }
  }
  return Math.floor(count / 3);
};
