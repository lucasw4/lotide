const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = function (array1, array2, result) {
  if (eqArrays(array1, array2) === result) {
    return `🟢🟢 Assertion Passed: The result of comparing ${[array1]} && ${array2} === ${result}`
  } else {
    return `🔴🔴 Assertion Failed: $The result of comparing ${array1} && ${array2} !== ${result}`
  }
}

const middle = function (array) {
  let arrayMiddle = Math.ceil(array.length / 2 - 1)
  middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  if (array.length % 2 !== 0) {
    middleArray.push(array[arrayMiddle])
  } else {
    middleArray.push(array[arrayMiddle])
    middleArray.push(array[arrayMiddle + 1])
  }
  console.log(arrayMiddle);
  return middleArray;
}