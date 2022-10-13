const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return `🟢🟢 Assertion Passed: The result of comparing ${array1} && ${array2} === true`
  } else {
    return `🔴🔴 Assertion Failed: $The result of comparing ${array1} && ${array2} !== true`
  }
}

module.exports = assertArraysEqual;