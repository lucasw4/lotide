const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')

const array1 = [1,2,3];
const array2 = [1,2,3];

describe('#assertArraysEqual', () => {
  it ('returns true for [1,2,3] and [1,2,3]', () => {
    assert.equal(assertArraysEqual(array1, array2), true)
  })
})