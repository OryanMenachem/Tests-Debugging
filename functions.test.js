import { sumTo } from "./functions.js";
import { test, describe } from "node:test";
import assert from "assert";

describe("sumTo() func", () => {
  test("1. Correct input, a positive integer", () => {
    assert.strictEqual(sumTo(4), 6); // returned 6, change 10 to 6
  });
    test("2. Invalid input, negative number", () => {
      assert.strictEqual(sumTo(-5), 0);
    });
  //   test("3. Invalid input, not a number", () => {
  //     assert.strictEqual(sumTo("a"), false);
  //   });
  test("4. No numbers to sum ", () => {
    assert.strictEqual(sumTo(0), 0);
  });
});
