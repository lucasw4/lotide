const _ = require('./index')

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return _.eqArrays(object1[item], object2[item])
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  } return true;
}

module.exports = eqObjects;