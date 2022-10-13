/**
 *
 * @param {*} array
 * @param {*} callBackFn
 * @returns
 */

// Returns new array with callbackFN applied to each element of given array
const map = function(array, callBackFn) {
  const results = [];
  for (let i of array) {
    results.push(callBackFn(i));
  }
  return results;
};

module.exports = map;