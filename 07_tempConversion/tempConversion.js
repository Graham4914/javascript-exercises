// Function 1: Convert Fahrenheit to Celsius
const convertToCelsius = function (fahrenheitTemp) {
  // Use the formula to convert Fahrenheit to Celsius
  const celsiusTemp = (fahrenheitTemp - 32) * (5/9);

  // Round the result to one decimal place
  const roundedCelsius = Math.round(celsiusTemp * 10) / 10;

  // Return the rounded Celsius temperature
  return roundedCelsius;
};

// Function 2: Convert Celsius to Fahrenheit
const convertToFahrenheit = function (celsiusTemp) {
  // Use the formula to convert Celsius to Fahrenheit
  const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;

  // Round the result to one decimal place
  const roundedFahrenheit = Math.round(fahrenheitTemp * 10) / 10;

  // Return the rounded Fahrenheit temperature
  return roundedFahrenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
