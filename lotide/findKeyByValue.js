const findKeyByValue = function (object, value) {
  // Finds the key from a given value, in a given object
  for (let key in object) {
    if (object[key] === value) {
      return i;
    }
  }
  return;
}

module.exports = findKeyByValue;