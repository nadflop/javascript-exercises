const palindromes = function (str) {
    var re = /[\W]/g;
    var reverseStr = Array.from(str).reverse().join("").toLowerCase().replace(re, '');
    
    return (reverseStr === str.toLowerCase().replace(re, ''));
};

// Do not edit below this line
module.exports = palindromes;
