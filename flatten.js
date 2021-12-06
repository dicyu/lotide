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

  module.exports = flatten;