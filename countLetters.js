// Function Implementation of asserting equalness
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  // take a sentence as a string, return count of each letters in that sesntence
  const results = {};
  const str = sentence.split(" ").join("").toLowerCase();

  for (const letters of str) {
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
      } 
    }
    return results;
  };

const results1 = countLetters("lighthouse in the house");
const results2 = countLetters("DOES THIS TAKE all CAPS off");
const results3 = countLetters("?????");

// Test Code
console.log(results1);
console.log(results2);
console.log(results3);

assertEqual(results1["l"], 1);
assertEqual(results2["e"], 2);
assertEqual(results3["?"], 2);