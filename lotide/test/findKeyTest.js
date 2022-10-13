const _ = require('../index')
const assert = require('chai').assert

let testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

describe('#findKey', () => {
  it('should return noma when given testObj and x => x.stars === 2', () => {
    assert.equal(_.findKey(testObj, x => x.stars === 2), "noma")
  })
  it('should return undefined when given testObj and x => x.stars === 4', () => {
    assert.equal(_.findKey(testObj, x => x.stars === 4), undefined)
  })
  it('should return Akaleri when given testObj and x => x.stars === 3', () => {
    assert.equal(_.findKey(testObj, x => x.stars === 3), "Akaleri")
  })
})