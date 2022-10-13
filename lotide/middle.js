const middle = function (array) {
  let arrayMiddle = Math.ceil(array.length / 2 - 1)
  middleArray = [];
  if (array.length <= 2) {
    return array
  }
  if (array.length % 2 !== 0) {
    middleArray.push(array[arrayMiddle])
  } else {
    middleArray.push(array[arrayMiddle])
    middleArray.push(array[arrayMiddle + 1])
  }
  return middleArray;
}

module.exports = middle;