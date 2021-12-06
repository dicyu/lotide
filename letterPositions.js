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

module.exports = letterPositions;