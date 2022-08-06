"use strict"

var str = document.getElementById("randomise").innerHTML

var loops = []
for (var i = 0; i < str.length; i++) {
    loops.push(Math.floor(Math.random() * 30) + 20)
    //10 = 1 second
}

setInterval(randomise, 75)

//Instruction to get desired string 
//loop is predefined in loops arr
//desired str = array
//find loops left for each index for each character in current str
//get the index of characters with loops left
//randomise character again

function randomise() {
    const desiredStr = str.split("")
    //desiredStr = string array

    var currentStr = str.split("")
    // console.log(currentStr)
    var loopsLeftIndex = [];
    for (var i = 0; i < loops.length; i++) {
        if (loops[i] > 0) {
            loopsLeftIndex.push(i)
        }
    }

    if (loopsLeftIndex.length > 0) {
        for (var j = 0; j < loopsLeftIndex.length; j++) {
            // console.log(loops[loopsLeftIndex[j]])
            // console.log(loops)
            if (loops[loopsLeftIndex[j]] > 0) {
                loops[loopsLeftIndex[j]]--;
                currentStr[loopsLeftIndex[j]] = randomiseChar()
            } else {
                currentStr[loopsLeftIndex[j]] = desiredStr[j]
            }
        }
    }
    document.getElementById("randomise").innerHTML = arrToStr(currentStr)
}

function arrToStr(array) {
    var str = ""
    for (var i = 0; i < array.length; i++) {
        str+=array[i]
    }

    return str;
}

function randomiseChar() {
    const characterArray = ['0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '!', '"', '#',
    '$', '%', '&', '\\', "'",
    '(', ')', '*', '+', ',',
    '-', '.', '/', ':', ';',
    '<', '=', '>', '?', '@',
    '[', ']', '^', '_', '{',
    '|', '}'];


    return characterArray[Math.floor(Math.random() * characterArray.length)]
}





