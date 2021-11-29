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

module.exports = middle;