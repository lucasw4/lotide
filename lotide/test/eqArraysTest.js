const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe('#eqArrays', () => {
  it('returns true when [1,2,3] and [1,2,3] are given', () => {
    assert.equal(eqArrays([1,2,3], [1,2,3]), true);
  })
  it('returns false when [1,2,3] and [1,3,2] are given', () => {
    assert.equal(eqArrays([1,2,3], [1,3,2]), false);
  })
})