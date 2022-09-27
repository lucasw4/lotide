const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${[actual]} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letters = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
};

let test = countLetters('we are coding today');
console.log(test);
assertEqual(test["w"], 1);
assertEqual(test["z"], undefined);
assertEqual(test["o"], 2);