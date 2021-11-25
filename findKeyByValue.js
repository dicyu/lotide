// Function to see if both sides equal to each other or fail
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(theObject, value) {
  const newObj = Object.keys(theObject);

  for (let key of newObj) {
    if (theObject[key] === value) {
      return key;
    }
  }
};

// Test Code

const bestTvShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "comedy");