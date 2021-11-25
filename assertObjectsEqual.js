// Returns true if both objects have identical keys with identical values
// Otherwise you get back a fat false!
const eqObjects = function(object1, object2) {
  const objArr1 = Object.keys(object1);
  const objArr2 = Object.keys(object2);

  if (objArr1.length !== objArr2.length) {
    return false;
  } else {
    for (const key of objArr1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // util library inspect function
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Code
assertObjectsEqual({ a: 1, b: 2}, { a: 1, b: 2}); // => true
assertObjectsEqual({ a: 1, b: 10}, { a: 1, b: 10}); // => true
assertObjectsEqual({ a: 1, b: 10}, { a: 1, b: 2}); // => false