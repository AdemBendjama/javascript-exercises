const reverseString = function(word) {
    let arrayOfChars = word.split('');
    let reverseWord = '';
    for (let i = arrayOfChars.length - 1 ; i >= 0 ; i--) {
        reverseWord = reverseWord + arrayOfChars[i];
        
    }

    return reverseWord ;
};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
