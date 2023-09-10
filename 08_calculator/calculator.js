// Function 1: Add
const add = function (a, b) {
  return a + b;
};

// Function 2: Subtract
const subtract = function (a, b) {
  return a - b;
};

// Function 3: Sum
const sum = function (numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

// Function 4: Multiply
const multiply = function (numbers) {
  let product = 1;
  for (let number of numbers) {
    product *= number;
  }
  return product;
};

// Function 5: Power
const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

// Function 6: Factorial
const factorial = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Export the functions
module.exports = { add, subtract, sum, multiply, power, factorial };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
