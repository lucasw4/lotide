const eqArrays = function(array1, array2) {
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
};

const assertArraysEqual = function(array1, array2, result) {
  if (eqArrays(array1, array2) === result) {
    return `🟢🟢 Assertion Passed: The result of comparing ${[array1]} && ${array2} === ${result}`;
  } else {
    return `🔴🔴 Assertion Failed: $The result of comparing ${array1} && ${array2} !== ${result}`;
  }
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        flattenedArray.push(element[j]);
      }
    } else if (!Array.isArray(element)) {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

const array = [1, 2, [3, 4], 5, [6]];
console.log(flatten(array));
console.log(assertArraysEqual(flatten(array), [1, 2, 3, 4, 5, 6], true));