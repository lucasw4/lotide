const _ = require('../index')
const assert = require('chai').assert

let obj1 = {
  1: 2,
  2: 3,
  3: 4,
}

let obj2 = {
  1: 2,
  2: 3,
  3: 4,
}

let obj3 = {
  2: 3,
  1: 2,
  3: 4,
}

describe('#eqObjects', () => {
  it('returns true when given obj1 and obj3', () => {
    assert.equal(_.eqObjects(obj1, obj2), true)
  })
  it('returns true when given obj1 and obj3', () => {
    assert.equal(_.eqObjects(obj1, obj3), true)
  })
})