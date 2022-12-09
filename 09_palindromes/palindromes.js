const palindromes = function (phrase) {
    let punctuations = [";", ":", ",", "!", ".", "?", "'", '"'," "];
    punctuations.forEach(element => {
        phrase = phrase.split(element);
        let combineStrings = "";
        phrase.forEach(string => {
            combineStrings += string;
        });
        phrase = combineStrings ;
    });

    phrase = phrase.toLowerCase();
    phrase = phrase.split("");

    for (let i = 0; i < phrase.length / 2; i++) {
        if (phrase[i] != phrase[phrase.length - i - 1]) {
            return false;
        }

    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
