const assert = require('chai').assert
/**
 * 
 * @param {*} array 
 * @returns 
 */

// Flattens an array with one nested array into non nested array
const flatten = function(array) {
  let flattenedArray = []
  array.forEach(ele => {
    if(Array.isArray(ele)) {
      ele.forEach(element => {
        flattenedArray.push(element)
      });
    } else {
      flattenedArray.push(ele);
    }
  });
  return flattenedArray;
};

module.exports = flatten; 