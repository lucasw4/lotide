const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${[actual]} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(array, items) {
  const results = {};

  for (const item of array) {
    if (items[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;

};