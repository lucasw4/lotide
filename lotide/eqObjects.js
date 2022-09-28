const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢 Assertion Passed: ${[actual]} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item])
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  } return true;
}

const obj1 = {
  a: "1",
  b: "2",
  c: "3",
}

const obj2 = {
  b: "2",
  a: "1",
  c: "3",
}

const obj3 = {
  a: "4",
  b: "5"
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(obj1,obj2), true);
assertEqual(eqObjects(cd,dc), true);
assertEqual(eqObjects(cd,cd2), false);