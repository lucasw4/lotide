const assert = require('chai').assert
const tail  = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe('#tail', () => {
  it('returns "Labs" for array ["Hello", "Lighthouse", "Labs"]', () => {
    assert.equal(result[1], "Labs")
  })
})