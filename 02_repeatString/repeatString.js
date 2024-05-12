const repeatString = function(stringToRepeat, numOfRepetition) {
    var finalString = "";
    if (numOfRepetition < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < numOfRepetition; i++) {
        finalString += stringToRepeat; 
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
