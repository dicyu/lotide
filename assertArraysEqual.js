const eqArrays = require('./eqArrays');
  
// function to compare arrays with eqArrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;