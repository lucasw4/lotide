const without = function (source, itemsToRemove) {
  // given a source array and an itemsToRemove array, returns a new array with all itemsToRemove removed.
  const sourceRemoved = [];
  source.forEach(ele => {
    if (!itemsToRemove.includes(ele)) {
      sourceRemoved.push(ele);
    }
  });
  return sourceRemoved;
}

module.exports = without;