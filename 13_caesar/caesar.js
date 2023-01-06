const caesar = function (encryptedWord, steps) {
    //
    let decryptedWord = "";
    for (let i = 0; i <= encryptedWord.length - 1; i++) {
        //
        let asciiCode = encryptedWord.charCodeAt(i);
        if (asciiCode <= 90 && asciiCode >= 65
            || asciiCode <= 122 && asciiCode >= 97) {
            if (steps > 0) {
                for (let j = 1; j <= steps; j++) {
                    if (asciiCode == 90) {
                        //
                        asciiCode = 64;
                    }
                    if (asciiCode == 122) {
                        //
                        asciiCode = 96;
                    }
                    //
                    asciiCode++;
                }
            } else if (steps < 0){
                let loops =-steps;
                for (let j = 1; j <= loops; j++) {
                    if (asciiCode == 65) {
                        //
                        asciiCode = 91;
                    }
                    if (asciiCode == 97) {
                        //
                        asciiCode = 123;
                    }
                    //
                    asciiCode--;
                }
            }
        }

        decryptedWord += String.fromCharCode(asciiCode);
    }

    return decryptedWord;
};

console.log(caesar("A y X L z", 5));
// Expected result F d C Q e
// Do not edit below this line
module.exports = caesar;
