const takeUntil = function(array, callBack) {
  // Returns a new array that takes every element out of a given array until the callbackfunction parameters are met.
  let results = [];
  for (let i of array) {
    if (!callBack(i)) {
      results.push(i);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;