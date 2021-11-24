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
// function to figure out where each letter's position are in the string
const letterPositions = function(sentence) {
  const results = {};
  const str = sentence.toLowerCase();
  console.log(str);
  for (let x = 0; x < str.length; x++) {
    let newChar = str[x];
    if (newChar !== " ") {
      if (results[newChar]) {
        results[newChar].push(x);
      } else {
        results[newChar] = [x];
      }
    }
  }
  return results;
};

// Test Code
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);