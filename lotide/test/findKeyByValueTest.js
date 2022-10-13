const _ = require('../index')
const assert = require('chai').assert

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let result = _.findKeyByValue(bestTVShowsByGenre, "The Wire")

describe('#findKeyByValue', () => {
  it('should return drama when given object bestTVShowsByGenre and "The Wire"', () => {
    assert.equal(result, "drama")
  })
})