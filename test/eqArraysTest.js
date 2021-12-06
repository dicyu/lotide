const assert = require(`chai`).assert
const eqArrays = require(`../eqArrays`)


// Test Code
describe("#eqObjects", () => {
  it('should return true for [1, 2, 3], [1, 2, 3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3],), true);
  });

  it('should return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('should return true for [1, 2, 3], [3, 2, 1]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('should return true for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('should true for [[2, 3], [4]], [[2, 3], [4]]', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  })

});