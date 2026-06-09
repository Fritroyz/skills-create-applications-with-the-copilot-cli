const calc = require('../calculator');

describe('calculator programmatic API', () => {
  test('add: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtract: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiply: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('divide: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('divide throws on division by zero', () => {
    expect(() => calc.divide(1, 0)).toThrow('Division by zero');
  });

  // New operations
  test('modulo: 5 % 2 = 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('modulo throws on modulo by zero', () => {
    expect(() => calc.modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('pow: 2 ** 3 = 8', () => {
    expect(calc.pow(2, 3)).toBe(8);
  });

  test('sqrt: sqrt(16) = 4', () => {
    expect(calc.sqrt(16)).toBe(4);
  });

  test('sqrt throws on negative input', () => {
    expect(() => calc.sqrt(-9)).toThrow('Square root of negative number');
  });

  test('pow with non-integer exponent', () => {
    expect(calc.pow(9, 0.5)).toBeCloseTo(3);
  });

  // Alias tests requested: power() and squareRoot()
  test('power alias: power(2, 3) = 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('power with negative exponent: power(2, -2) = 0.25', () => {
    expect(calc.power(2, -2)).toBeCloseTo(0.25);
  });

  test('squareRoot alias: squareRoot(16) = 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('squareRoot throws on negative input', () => {
    expect(() => calc.squareRoot(-4)).toThrow('Square root of negative number');
  });
});
