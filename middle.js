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

// function to grab the middle of arrays
const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[(arr.length / 2) -1]);
    newArr.push(arr[(arr.length / 2)]);
  } else {
    newArr.push(arr[Math.floor(arr.length /2)]);
  }
  return newArr;
// return a empy array if there is only one index
// make sure the array is divisable by 2, reminder 0
};


// test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]