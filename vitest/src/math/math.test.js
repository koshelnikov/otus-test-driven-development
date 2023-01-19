import { factorial } from "./math";
import { assert, expect, test } from 'vitest'

test("1! = 1", () => {
    expect(factorial(1)).toBe(1);
});

// test("2! = 2", () => {
//   expect(factorial(2)).toBe(2);
// });

// test("5! = 120", () => {
//   expect(factorial(5)).toBe(120);
// });
