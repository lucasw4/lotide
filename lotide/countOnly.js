const countOnly = function(array, items) {
  const results = {};
  // Counts each item from an items array that appears in a given array and returns an object with each count.
  for (const item of array) {
    for (const checkItem of items) {
      if (item === checkItem) {
        if (!results[item]) {
          results[item] = 1;
        } else {
          results[item] += 1;
        }
      }
    }
  }
  return results;
};
console.log(countOnly([3,3,3], [3]));
module.exports = countOnly;