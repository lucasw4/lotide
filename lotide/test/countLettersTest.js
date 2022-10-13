const _ = require('../index')
const assert = require('chai').assert

describe('#countLetters', () => {
  it('returns an object with the a count of 3 when given mamamia as the string', () => {
    assert.equal(_.countLetters('mamamia')["a"], 3)
  })
})