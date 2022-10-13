const _ = require('../index')
const assert = require('chai').assert

let result = _.letterPositions('lighthouse')

describe('#letterPositions', () => {
  it('should return an object with each letter position for a given word', () => {
    assert.equal(result["l"], 0)
  })
})