const assertEqual = require('../assertEqual')
const assert = require('chai').assert

describe('#assertEqual', () => {
  it('returns true when actual is === expected', () => {
    assert.equal(assertEqual(1,1), true)
  })
})