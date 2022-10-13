const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

const array1 = [1,2]
const array2 = [1,2,3,4,5]
const array3 = [1,2,3,4,5,6]
describe('#middle', () => {
  it('returns the middle of array', () => {
    assert.equal(assertArraysEqual(middle(array1), [1,2]), true)
  })
  it('returns 3 for array [1,2,3,4,5]', () => {
    assert.equal(assertArraysEqual(middle(array2), [3]), true)
  })
  it('returns [3,4] for array [1,2,3,4,5,6]', () => {
    assert.equal(assertArraysEqual(middle(array3), [3,4]), true)
  })
})