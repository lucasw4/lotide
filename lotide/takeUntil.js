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
    return `🟢🟢 Assertion Passed: The result of comparing ${array1} && ${array2} === ${result}`;
  } else {
    return `🔴🔴 Assertion Failed: $The result of comparing ${array1} && ${array2} !== ${result}`;
  }
};

const takeUntil = function(array, callBack) {
  let results = [];
  for (let i of array) {
    if (!callBack(i)) {
      results.push(i);
    } else {
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2], true));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"], true));