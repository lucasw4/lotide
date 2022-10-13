const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return true
  } else {
    return false
  }
}

module.exports = assertArraysEqual;