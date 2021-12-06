const assert = require(`chai`).assert;
const countOnly = require(`../countOnly`);

// Test Code
const firstName = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstName , { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Salima": true});

describe("#countOnly", () => {
  it('returns 1 for result1 ["Jason"]', () => {
    assert.equal(result1['Jason'], 1);
  });
  
  it('returns "undefined" for result1 ["Karima"]', () => {
    assert.equal(result1['Karima'], undefined);
  });

  it('returns 2 for result1 ["Fang"]', () => {
    assert.equal(result1['Fang'], 2);
  });

  it('returns 5 for result1 ["Salima"]', () => {
    assert.equal(result1['Salima'], 2);
  });
});