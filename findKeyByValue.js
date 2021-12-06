const findKeyByValue = function(theObject, value) {
  const newObj = Object.keys(theObject);

  for (let key of newObj) {
    if (theObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;