const _ = require('../index')
const assert = require('chai').assert

describe('#without', () => {
  it('returns an array without the given elements', () => {
    assert.deepEqual(_.without([1,2,3], [1]), [2,3])
  })
})