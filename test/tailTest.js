const assertEqual = require(`../assertEqual`)
const tail = require(`../tail`)

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result,["Lighthouse", "Labs"]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);