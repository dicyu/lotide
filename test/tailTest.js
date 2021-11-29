const assert = require(`chai`).assert;
const tail = require(`../tail`)

describe("#tail", () => {
  it ("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result,["Lighthouse", "Labs"]);