const getTheTitles = function(books) {
    //
    let titleBooks=[];
    books.forEach(element => {
        titleBooks.push(element.title);
    });

    return titleBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
