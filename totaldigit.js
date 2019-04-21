function totalDigitRekursif(angka) {
    // you can only write your code here!
    var remainder = angka % 10;
    var sum = remainder; // remaindernya 2 
    if (angka >= 10) {
        var rest = Math.floor(angka / 10); // 512/10 = 51
        sum += totalDigitRekursif(rest);
    }
    return sum;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5