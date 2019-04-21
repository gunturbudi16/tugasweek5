/*
    ======================
    String to Multidimensi
    ======================
    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col
    [EXAMPLE]
    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akat 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]
 */

function stringToMultidimensi(str) {
    // your code here
    var array = []
    var counter = 0
    for (var i = 0; i < Math.sqrt(str.length); i++) {
        var array2 = []
        for (var j = 0; j < Math.sqrt(str.length); j++) {
            array2.push(str[counter])
            counter++
        }
        array.push(array2)
    }
    var string = ''
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            string += (array[i][j])
        }
    }
    return string
}

console.log(stringToMultidimensi("0120194124213712"))
/*
   [
       [0,1,2,0],
       [1,9,4,1],
       [2,4,2,1],
       [3,7,1,2]
   ]
*/

stringToMultidimensi("01201941242137127")
/*
   // char count invalid
*/