const assert = require(`chai`).assert;
const flatten = require(`../flatten`);

// Test Code

describe("#flatten", () => {
  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns [1, 2, , 3, 4, 5, 7] for [1, 2, "a", [3, 4], 5, 7', () => {
    assert.deepEqual(flatten([1, 2, 6, [3, 4], 5, 7]), [1, 2, 6, 3, 4, 5, 7]);
  });

});


// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, "a", [3, 4], 5, 7]));