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
 *
 * Usage (CLI):
 *   node src/calculator.js add 2 3       # => 5
 *   node src/calculator.js divide 10 2   # => 5
 *
 * The file exports programmatic functions: add, subtract, multiply, divide
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

module.exports = { add, subtract, multiply, divide };

// CLI entrypoint
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage(exitCode = 1) {
    console.error('Usage: node src/calculator.js <operation> <a> <b>');
    console.error('Supported operations: add, subtract, multiply, divide');
    process.exit(exitCode);
  }

  if (!op || typeof aRaw === 'undefined' || typeof bRaw === 'undefined') {
    usage(2);
  }

  const a = Number(aRaw);
  const b = Number(bRaw);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Error: both operands must be valid numbers');
    usage(2);
  }

  try {
    let result;
    switch (op.toLowerCase()) {
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
      default:
        console.error(`Unknown operation: ${op}`);
        usage(2);
    }

    // Print numeric result without extra formatting
    if (Number.isInteger(result)) {
      console.log(result);
    } else {
      console.log(result);
    }
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}
