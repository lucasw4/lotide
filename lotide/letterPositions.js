const letterPositions = function(sentence) {
  // returns an object with the position of each letter in a given sentence
  sentenceArray = sentence.split('')
  const results = {};
  sentenceArray.forEach((ele, i) => {
    if (ele !== ' ') {
      if (results[ele]) {
        results[ele].push(i)
      } else {
        results[ele] = [i]
      }
    }
  })
  return results;
};

module.exports = letterPositions;