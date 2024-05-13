const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';
    
    const array = [num1, num2].sort();
    var result = 0;
    for (let i = array[0]; i <= array[1]; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
