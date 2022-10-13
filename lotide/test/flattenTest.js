const _ = require('../index')
const assert = require('chai').assert

describe('#flatten', () => {
  it("returns a flattened array", ()  => {
    const array = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(_.flatten(array), [1,2,3,4,5,6])
  })
})