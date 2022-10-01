const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${[actual]} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callBack) {
  for(let i in object) {
    if (callBack(object[i])) {
      return i;
    }
  }
}

let testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

assertEqual(findKey(testObj, x => x.stars === 2), "noma");
assertEqual(findKey(testObj, x => x.stars === 4), undefined);
assertEqual(findKey(testObj, x => x.stars === 3), "Akaleri");