const _ = require('../index')
const assert = require('chai').assert

describe('#takeUntil', () => {
  it('returns an array with elements taken out', () => {
    assert.deepEqual(_.takeUntil([1, 2, 4, 7, 9], (x) => x < 7), [1, 2, 4])
  })
})