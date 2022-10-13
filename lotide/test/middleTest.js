const assert = require('chai').assert;
const middle = require('../middle');

const array1 = [1,2]
const array2 = [1,2,3,4,5]
const array3 = [1,2,3,4,5,6]
describe('#middle', () => {
  it('returns the middle of array', () => {
    assert.deepEqual(middle(array1), [1,2], true)
  })
  it('returns 3 for array [1,2,3,4,5]', () => {
    assert.deepEqual(middle(array2), [3], true)
  })
  it('returns [3,4] for array [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle(array3), [3,4], true)
  })
})