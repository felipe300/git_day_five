const { add, multiply, subtract } = require("../src/calculator");

test("add function works correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test("multiply function works correctly", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(0, 5)).toBe(0);
});

// 2. Test the subtract function with various cases
test("subtract function works correctly", () => {
  // Test positive numbers
  expect(subtract(10, 4)).toBe(6);

  // Test with negative results
  expect(subtract(5, 12)).toBe(-7);

  // Test subtracting a negative number (which results in addition)
  expect(subtract(10, -5)).toBe(15);

  // Test subtracting zero
  expect(subtract(8, 0)).toBe(8);

  // Test with floating-point numbers (use .toBeCloseTo for safer floating point checks)
  expect(subtract(3.5, 1.2)).toBeCloseTo(2.3);
});
