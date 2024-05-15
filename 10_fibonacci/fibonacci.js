const fibonacci = function(sequence) {
    if (sequence < 0) return "OOPS";
    if (sequence == 0) return 0;
    if (sequence == 1 || sequence == 2) return 1;
    return fibonacci(sequence-1) + fibonacci(sequence-2);
};

// Do not edit below this line
module.exports = fibonacci;
