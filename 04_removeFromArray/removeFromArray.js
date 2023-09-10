const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
   
    array.forEach((item) => {
   
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
   
    return newArray;
  };
  

  
  module.exports = removeFromArray;
  