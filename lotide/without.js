const without = function (source, itemsToRemove) {
  // given a source array and an itemsToRemove array, returns a new array with all itemsToRemove removed.
  const sourceRemoved = []
  source.forEach(ele => {
    if(!itemsToRemove.includes(ele)) {
      sourceRemoved.push(ele)
    }
  });
  return sourceRemoved
}

console.log(without([1,2,3,9,5,8],[2,8]),[1,3,9,5])