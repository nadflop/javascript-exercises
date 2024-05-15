const getTheTitles = function(arr) {
    var books = Array.from(arr);
    const title = books.map(book => book.title);
    return title;
};

// Do not edit below this line
module.exports = getTheTitles;
