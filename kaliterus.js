function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka <= 10) {
        return angka
    }

    var angkaString = angka.toString()
    var kaliSatu = 1;
    for (var i = 0; i < angkaString.length; i++) {
        kaliSatu = kaliSatu * Number(angkaString[i]) // 1x6 = 6 // 1x6 = 6 // 6x6 = 36... next function 3x1 = 3 // 6x1 = 6 // 3x6 == 18... next function 1x1 = 1 // 1x8 = 8.. habis  itu masuk ke angka 1x8
    }
    return kaliTerusRekursif(kaliSatu)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6