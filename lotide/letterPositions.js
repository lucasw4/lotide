

const letterPositions = function(sentence) {
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