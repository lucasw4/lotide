const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

const array1 = [1,2]
const array2 = [1,2,3,4,5]
const array3 = [1,2,3,4,5,6]
console.log(assertArraysEqual(middle(array1), [1,2]))
console.log(assertArraysEqual(middle(array2), [3]))
console.log(assertArraysEqual(middle(array3), [3,4]))