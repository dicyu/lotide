// function to compare arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};
  
// function to compare arrays with eqArrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ ${arr1} !== ${arr2}`);
  }
};

const flatten = function (arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      for (let y = 0; y < arr[x].length; y++) {
        newArr.push(arr[x][y]);
      }
    } else {
      newArr.push(arr[x]);
    }
  }
  return newArr;
  };

// Test Code
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, "a", [3, 4], 5, 7]));