/*
 * calculator.js
 *
 * Node.js CLI calculator and library
 *
 * Supported operations:
 * - add:       addition (a + b)
 * - subtract:  subtraction (a - b)
 * - multiply:  multiplication (a * b)
 * - divide:    division (a / b)
 * - modulo:    remainder (a % b)
 * - pow:       exponentiation (a ** b)
 * - sqrt:      square root (sqrt(a))
 *
 * Usage (CLI):
 *   node src/calculator.js add 2 3         # => 5
 *   node src/calculator.js divide 10 2     # => 5
 *   node src/calculator.js pow 2 8         # => 256
 *   node src/calculator.js sqrt 16         # => 4
 *
 * The file exports programmatic functions: add, subtract, multiply, divide, modulo, pow, sqrt
 */

'use strict';

// Programmatic API
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function pow(a, b) {
  return a ** b;
}

function sqrt(a) {
  if (a < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, pow, sqrt };

// CLI entrypoint
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage(exitCode = 1) {
    console.error('Usage: node src/calculator.js <operation> <a> <b?>');
    console.error('Supported operations: add, subtract, multiply, divide, modulo, pow, sqrt');
    process.exit(exitCode);
  }

  if (!op) {
    usage(2);
  }

  try {
    let result;
    const operation = op.toLowerCase();

    if (operation === 'sqrt') {
      if (typeof aRaw === 'undefined') {
        usage(2);
      }
      const a = Number(aRaw);
      if (!Number.isFinite(a)) {
        console.error('Error: operand must be a valid number');
        usage(2);
      }
      result = sqrt(a);
    } else {
      if (typeof aRaw === 'undefined' || typeof bRaw === 'undefined') {
        usage(2);
      }
      const a = Number(aRaw);
      const b = Number(bRaw);
      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        console.error('Error: both operands must be valid numbers');
        usage(2);
      }

      switch (operation) {
        case 'add':
          result = add(a, b);
          break;
        case 'subtract':
          result = subtract(a, b);
          break;
        case 'multiply':
          result = multiply(a, b);
          break;
        case 'divide':
          result = divide(a, b);
          break;
        case 'modulo':
        case 'mod':
        case '%':
          result = modulo(a, b);
          break;
        case 'pow':
        case '^':
          result = pow(a, b);
          break;
        default:
          console.error(`Unknown operation: ${op}`);
          usage(2);
      }
    }

    // Print numeric result
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}
