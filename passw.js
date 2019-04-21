function changeVocals(str) {
    var gantiKata = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            gantiKata += 'b'
        } else if (str[i] === 'i') {
            gantiKata += 'j'
        } else if (str[i] === 'u') {
            gantiKata += 'v'
        } else if (str[i] === 'e') {
            gantiKata += 'f'
        } else if (str[i] === 'o') {
            gantiKata += 'p'
        } else if (str[i] === 'A') {
            gantiKata += 'B'
        } else if (str[i] === 'I') {
            gantiKata += 'J'
        } else if (str[i] === 'U') {
            gantiKata += 'V'
        } else if (str[i] === 'e') {
            gantiKata += 'F'
        } else if (str[i] === 'O') {
            gantiKata += 'P'
        } else {
            gantiKata += str[i]
        }
    }
    return gantiKata
} //code di sini

function reverseWord(str) {
    var reverseWord = '';
    for (var j = str.length - 1; j >= 0; j--) {
        reverseWord += str[j]
    }
    return reverseWord
    //code di sini
}

function setLowerUpperCase(str) {
    var lowerCaseAndUpper = ''
    for (var k = 0; k < str.length; k++) {
        if (str[k] === str[k].toUpperCase()) {
            lowerCaseAndUpper += str[k].toLowerCase()
        } else {
            lowerCaseAndUpper += str[k].toUpperCase()
        }
    }
    return lowerCaseAndUpper
    //code di sini
}

function removeSpaces(str) {
    var removeSpace = '';
    for (var l = 0; l < str.length; l++) {
        if (str[l] === ' ') {
            str[l] === ''
        } else {
            removeSpace += str[l]
        }
    }
    return removeSpace
    //code di sini
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinput adalah 5 karakter'
    }
    var ke1 = changeVocals(name)
    var ke2 = reverseWord(ke1)
    var ke3 = setLowerUpperCase(ke2)
    var ke4 = removeSpaces(ke3)
    return ke4
    //code di sini
}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'