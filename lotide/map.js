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
    console.log(`🟢🟢 Assertion Passed: The result of comparing ${array1} && ${array2} === ${result}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: $The result of comparing ${array1} && ${array2} !== ${result}`);
  }
};

const map = function(array, callBackFn) {
  const results = [];
  for (let i of array) {
    results.push(callBackFn(i));
  }
  return results;
};

const array1 = ["Wow!", "Who?", "Is?", "This?", "Its", "Jim"];
assertArraysEqual(map(array1, (ele) => ele.length), [4, 4, 3, 5, 3, 3], true);
assertArraysEqual(map(array1, (ele) => {
  return ele[0];
}), ["W", "W", "I", "T", "I", "J"], true);