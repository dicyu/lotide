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
// function to return a subset of an array
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let x = 0; x < source.length; x++) {
    let matchArr = false;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        matchArr = true;
      }
    } if (matchArr === false) {
      newArr.push(source[x]);
    }
  }
  return newArr;
};

// Test Code
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 2, 3, 4, 5, 6, 7], [1, 3, 5])); // => [2, 4, 6, 7]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
  
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  