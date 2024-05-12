const removeFromArray = function(myArray, ...elements) {
    if (elements.length == 1) return myArray.filter((word) => word != elements);
    
    const args = Array.from(elements);
    const result = myArray.filter((word) => {
        return !args.includes(word);
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
