const countLetters = function(string) {
  // given a string, returns an object with a count of each letter in the string.
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

module.exports = countLetters;