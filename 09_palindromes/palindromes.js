const palindromes = function (string) {
const finalString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
return finalString.split("").reverse().join("") == finalString;
};

// Do not edit below this line
module.exports = palindromes;
