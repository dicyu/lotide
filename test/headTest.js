const assert = require(`chai`).assert;
const head = require(`../head`);

// TEST CODE

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  describe("#head", () => {
    it("returns '5' for ['5']", () => {
      assert.strictEqual(head([5]), 5);
    });
  });
  describe("#head", () => {
    it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
    });
  });
  describe("#head", () => {
    it("returns '1' for [1, 2, 3, 4, 5]", () => {
      assert.strictEqual(head([1, 2, 3, 4, 5]), 1);
    });
  });
});
  

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), 5);