/**
 * 
 * @param {*} array 
 * @returns 
 */
// Returns the middle of an array.
const middle = function (array) {
  let arrayMiddle = Math.ceil(array.length / 2 - 1)
  middleArray = [];
  // Returns array if length is less then 2
  if (array.length <= 2) {
    return array
  }
  // Returns the single middle of the array if the array.length is not even
  if (array.length % 2 !== 0) {
    middleArray.push(array[arrayMiddle])
  } 
  // Returns both elements if array.length is even
  else {
    middleArray.push(array[arrayMiddle])
    middleArray.push(array[arrayMiddle + 1])
  }
  return middleArray;
}

module.exports = middle;