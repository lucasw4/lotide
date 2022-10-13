const findKey = function(object, callBack) {
  // Runs a callback function on each element and returns the key from the first value that the callback evals to true.
  for (let i in object) {
    if (callBack(object[i])) {
      return i;
    }
  }
};

module.exports = findKey;