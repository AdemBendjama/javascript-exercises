const repeatString = function(word,count) {
    //
    if(count<0) return "ERROR";
    let repeatedWord = "";
    for (let i = 1; i <= count; i++) {
        repeatedWord=repeatedWord+word ;
    }
    //
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
