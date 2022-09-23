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
    return `🔴🔴 Assertion Failed: The result of comparing ${array1} && ${array2} !== ${result}`
  }
}


const without = function (source, itemsToRemove) {
  let sourceRemoved = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove) {
      sourceRemoved.push(source[i]);
    }
  }
  return sourceRemoved;
}