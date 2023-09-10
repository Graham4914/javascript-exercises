const leapYears = function (year) {
    // Check the leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      // It's a leap year
      return true;
    } else {
      // It's not a leap year
      return false;
    }
  };

// Do not edit below this line
module.exports = leapYears;
