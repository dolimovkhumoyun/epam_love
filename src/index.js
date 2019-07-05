/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 1; i <= preferences.length; i++) {
    if (i === preferences[preferences[preferences[i - 1] - 1] - 1]) {
      count++;
    }
  }
  return Math.floor(count / 3);
};
