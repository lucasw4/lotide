const _ = require('../index')
const assert = require('chai').assert

const array1 = ["Wow!", "Who?", "Is?", "This?", "Its", "Jim"];

describe('#map', () => {
  it('returns the length of each word givin the array of words and callbackFN', () => {
    assert.deepEqual(_.map(array1, (ele) => ele.length), [4, 4, 3, 5, 3, 3])
  })
})