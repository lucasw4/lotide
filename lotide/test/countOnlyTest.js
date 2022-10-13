const _ = require('../index')
const assert = require('chai').assert

describe('#countOnly', () => {
  it('returns object with key 3 and count 3', () => {
    assert.equal(_.countOnly([3,3,3], [3])[3], 3)
  })
})