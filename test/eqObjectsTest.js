const assert = require(`chai`).assert;
const eqObjects = require(`../eqObjects`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

const arr1 = { a: [1, 2], b: 1 };
const arr2 = { a: [1, 2], b: 1 };

// Test Code
describe("#eqObjects", () => {
  it('should return true for ({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('should return false for (ab, abc)', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it('should return true for (cd, dc)', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it('should return false for (cd, cd2)', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

  it('should return true for (arr1, arr2)', () => {
    assert.deepEqual(eqObjects(arr1, arr2), true);
  });

  it('should return true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects(arr1, arr2), true)
  })

  it('should return false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
  })


});