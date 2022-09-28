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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("gooba").o, [1, 2], true);
console.log(letterPositions("lighthouse in the house"));