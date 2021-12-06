const assert = require(`chai`).assert;
const findKeyByValue = require(`../findKeyByValue`);

const bestTvShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Test Code
describe("#findKeyByValue", () => {
  it('return "drama" for tv show ["The Wire"]', () => {
    assert.strictEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
  });

  it('return undefined for tv show ["That "70s Show"]', () => {
    assert.strictEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);
  });

  it('return "sci_fi" for tv show ["The Expanse"]', () => {
    assert.strictEqual(findKeyByValue(bestTvShowsByGenre, "The Expanse"), "sci_fi");
  });

  it('return "comedy" for tv show ["The Wire"]', () => {
    assert.strictEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "comedy");
  });

});