"use strict";

// document.getElementById("calculator").style.display = "none";
var calcType = 0;

function setCalcType(a) {
  calcType = a;
  console.log(calcType);
}

function calculatorMode(calcType) {
  switch (calcType) {
    case 1:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-success mb-2">
            <div class="card-body text-success p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: DEC --> BIN
                </h5>
            </div>
        </div>
      `;
      break;

    case 2:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-success mb-2">
            <div class="card-body text-success p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: DEC --> HEX
                </h5>
            </div>
        </div>
      `;
      break;

    case 3:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-danger mb-2">
            <div class="card-body text-danger p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: BIN --> DEC
                </h5>
            </div>
        </div>
      `;
      break;

    case 4:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-danger mb-2">
            <div class="card-body text-danger p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: BIN --> HEX
                </h5>
            </div>
        </div>
      `;
      break;

    case 5:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-warning mb-2">
            <div class="card-body text-warning p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: HEX --> DEC
                </h5>
            </div>
        </div>
      `;
      break;

    case 6:
      document.getElementById("calculatorMode").innerHTML = `
        <div class="card w-75 mx-auto border border-warning mb-2">
            <div class="card-body text-warning p-0">
                <h5 class="p-2 m-0" id="calculatorMode">
                    Calculator Mode: HEX --> BIN
                </h5>
            </div>
        </div>
      `;
      break;
  }
}

//dec

function decInput() {
  calculatorMode(calcType);
  document.getElementById("calculator").style.display = "block";
  var parentElement = document.getElementById("calculatorBtns");
  parentElement.innerHTML = `

            <div class="row">
                <div class="col text-center">
                    <ul class="list-unstyled" id="calculatorBtns">
                        <li class="mb-1">
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>A</button>
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>B</button>
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>C</button>
                        </li>

                        <li class="mb-1">
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>D</button>
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>E</button>
                            <button type="button" class="btn btn-success btn-lg w-25" disabled>F</button>
                        </li>

                        <li class="mb-1">
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('7')">7</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('8')">8</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('9')">9</button>
                        </li>

                        <li class="mb-1">
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('4')">4</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('5')">5</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('6')">6</button>
                        </li>

                        <li class="mb-1">
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('1')">1</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('2')">2</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('3')">3</button>
                        </li>

                        <li class="mb-1">
                            <button type="button" class="btn btn-outline-warning btn-lg w-25" onclick="cls() text-center">Clear</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('0')">0</button>
                            <button type="button" class="btn btn-outline-success btn-lg w-25" onclick="calculateOutput()">=</button>
                        </li>
                    </ul>
                </div>
            </div>
            `;
}

//bin
function binInput() {
  calculatorMode(calcType);
  document.getElementById("calculator").style.display = "block";
  var parentElement = document.getElementById("calculatorBtns");
  parentElement.innerHTML = `

              <div class="row">
                  <div class="col text-center">
                      <ul class="list-unstyled" id="calculatorBtns">
                          <li class="mb-1">
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>A</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>B</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>C</button>
                          </li>
  
                          <li class="mb-1">
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>D</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>E</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>F</button>
                          </li>
  
                          <li class="mb-1">
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>7</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>8</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>9</button>
                          </li>
  
                          <li class="mb-1">
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>4</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>5</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>6</button>
                          </li>
  
                          <li class="mb-1">
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>2</button>
                              <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('1')">1</button>
                              <button type="button" class="btn btn-danger btn-lg w-25" disabled>3</button>
                          </li>
  
                          <li class="mb-1">
                              <button type="button" class="btn btn-outline-warning btn-lg w-25 text-center" onclick="cls()">Clear</button>
                              <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('0')">0</button>
                              <button type="button" class="btn btn-outline-success btn-lg w-25" onclick="calculateOutput()">=</button>
                          </li>
                      </ul>
                  </div>
              </div>
              `;
}
//hex
function hexInput() {
  calculatorMode(calcType);
  document.getElementById("calculator").style.display = "block";
  var parentElement = document.getElementById("calculatorBtns");
  parentElement.innerHTML = `
                <div class="row">
                    <div class="col text-center">
                        <ul class="list-unstyled" id="calculatorBtns">
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('A')">A</button>
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('B')">B</button>
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('C')">C</button>
                            </li>
    
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('D')">D</button>
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('E')">E</button>
                                <button type="button" class="btn btn-outline-danger btn-lg w-25" onclick="addValue('F')">F</button>
                            </li>
    
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('7')">7</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('8')">8</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('9')">9</button>
                            </li>
    
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('4')">4</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('5')">5</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('6')">6</button>
                            </li>
    
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('1')">1</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('2')">2</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('3')">3</button>
                            </li>
    
                            <li class="mb-1">
                                <button type="button" class="btn btn-outline-warning btn-lg w-25 text-center" onclick="cls()">Clear</button>
                                <button type="button" class="btn btn-outline-secondary btn-lg w-25" onclick="addValue('0')">0</button>
                                <button type="button" class="btn btn-outline-success btn-lg w-25" onclick="calculateOutput()">=</button>
                            </li>
                        </ul>
                    </div>
                </div>
                `;
}

function cls() {
  document.getElementById("calculatorOutput").innerHTML = "";
}

function addValue(char) {
  document.getElementById("calculatorOutput").innerHTML += char;
}

function calculateOutput() {
  var calcInput = document.getElementById("calculatorOutput").innerHTML;
  if (calcInput == "&nbsp;") {
    return 0;
  } else {
    console.log(calcInput);
    console.log(calcType);
    var finalOutput = "";
    var calculatorTitle = document.getElementById("calculatorMode");

    switch (calcType) {
      case 1:
        finalOutput = decBin(calcInput);
        break;

      case 2:
        finalOutput = decHex(calcInput);
        break;

      case 3:
        finalOutput = binDec(calcInput);
        break;

      case 4:
        finalOutput = binHex(calcInput);
        break;

      case 5:
        finalOutput = hexDec(calcInput);
        break;

      case 6:
        finalOutput = hexBin(calcInput);
        break;
    }
  }

  //   if (finalOutput > 500000) {
  //     document.getElementById("calculatorOutput").innerHTML =
  //       " ERROR: Output value too big! ";
  //   } else {
  //     document.getElementById("calculatorOutput").innerHTML = finalOutput;
  //   }

  document.getElementById("calculatorOutput").innerHTML = finalOutput;
}

//Calculation JS
function decBin(a) {
  var count = 1;
  var num = a;
  while (num != 1) {
    if (num == 0) {
      return "0000";
    } else {
      num = Math.floor(num / 2);
      count++;
    }
  }
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(Math.pow(2, i));
  }
  newArr.reverse();
  var binStr = "";
  var num1 = a;
  for (var j = 0; j < newArr.length; j++) {
    if (num1 - newArr[j] > -1) {
      binStr += 1;
      num1 = num1 - newArr[j];
    } else {
      binStr += 0;
    }
  }
  return binStr;
}

function decHex(a) {
  var binary = decBin(a);
  var binArr = binary.split("");
  var binSplit = [];
  var maxLength = Math.ceil(binary.length / 4) * 4;
  if (binArr.length % 4 != 0) {
    binArr.reverse();
    for (var i = 0; i < maxLength - binary.length; i++) {
      binArr.push("0");
    }
    binArr.reverse();
  }

  for (var j = 0; j < binArr.length; j++) {
    if (j % 4 == 0 && j > 0) {
      binSplit.push(" ");
      binSplit.push(binArr[j]);
    } else {
      binSplit.push(binArr[j]);
    }
  }

  var binStr = "";

  for (var k = 0; k < binSplit.length; k++) {
    binStr += binSplit[k];
  }

  var $4_bits = binStr.split(" ");

  var rawHex = [];
  for (var l = 0; l < $4_bits.length; l++) {
    const hexTable = [8, 4, 2, 1];
    var nums = $4_bits[l].split("");
    var sum = 0;
    for (var m = 0; m < nums.length; m++) {
      nums[m] = parseInt(nums[m]);
      if (nums[m] == 1) {
        sum += hexTable[m];
      }
    }
    rawHex.push(sum);
  }

  for (var n = 0; n < rawHex.length; n++) {
    var rawHexNum = rawHex[n];
    switch (rawHexNum) {
      case 0:
        rawHex[n] = 0;
        break;
      case 1:
        rawHex[n] = 1;
        break;
      case 2:
        rawHex[n] = 2;
        break;
      case 3:
        rawHex[n] = 3;
        break;
      case 4:
        rawHex[n] = 4;
        break;
      case 5:
        rawHex[n] = 5;
        break;
      case 6:
        rawHex[n] = 6;
        break;
      case 7:
        rawHex[n] = 7;
        break;
      case 8:
        rawHex[n] = 8;
        break;
      case 9:
        rawHex[n] = 9;
        break;
      case 10:
        rawHex[n] = "A";
        break;
      case 11:
        rawHex[n] = "B";
        break;
      case 12:
        rawHex[n] = "C";
        break;
      case 13:
        rawHex[n] = "D";
        break;
      case 14:
        rawHex[n] = "E";
        break;
      case 15:
        rawHex[n] = "F";
        break;

      default:
        console.log("Error");
    }
  }

  var hexStr = "";

  for (var o = 0; o < rawHex.length; o++) {
    hexStr += rawHex[o];
  }

  return hexStr;
}

function binDec(a) {
  var binArr = a.split("");
  var binTable = [];

  for (var i = 0; i < binArr.length; i++) {
    binTable.push(Math.pow(2, i));
  }

  binTable.reverse();
  var sum = 0;

  for (var j = 0; j < binArr.length; j++) {
    if (binArr[j] == 1) {
      sum += binTable[j];
    } else {
    }
  }

  return sum;
}

function binHex(a) {
  a = a.split(" ");
  var str = "";
  for (var i = 0; i < a.length; i++) {
    str += a[i];
  }
  a = str;
  var num = binDec(a);
  var finalHex = decHex(num);

  return finalHex;
}

function hexDec(a) {
  var hexNums = a.split("");

  for (var i = 0; i < hexNums.length; i++) {
    var hexChar = hexNums[i];

    switch (hexChar) {
      case "0":
        hexNums[i] = 0;
        break;
      case "1":
        hexNums[i] = 1;
        break;
      case "2":
        hexNums[i] = 2;
        break;
      case "3":
        hexNums[i] = 3;
        break;
      case "4":
        hexNums[i] = 4;
        break;
      case "5":
        hexNums[i] = 5;
        break;
      case "6":
        hexNums[i] = 6;
        break;
      case "7":
        hexNums[i] = 7;
        break;
      case "8":
        hexNums[i] = 8;
        break;
      case "9":
        hexNums[i] = 9;
        break;
      case "A":
        hexNums[i] = 10;
        break;
      case "B":
        hexNums[i] = 11;
        break;
      case "C":
        hexNums[i] = 12;
        break;
      case "D":
        hexNums[i] = 13;
        break;
      case "E":
        hexNums[i] = 14;
        break;
      case "F":
        hexNums[i] = 15;
        break;

      default:
        console.log("Error");
    }
  }

  for (var j = 0; j < hexNums.length; j++) {
    hexNums[j] = fourBit(decBin(hexNums[j]));
  }

  var str = "";
  for (var k = 0; k < hexNums.length; k++) {
    str += hexNums[k];
  }

  hexNums = binDec(str);
  return hexNums;
}

function fourBit(a) {
  a = a.split("");
  if (a.length < 4) {
    a.reverse();
    while (a.length < 4) {
      a.push("0");
    }
    a.reverse();
  }

  var str = "";

  for (var i = 0; i < a.length; i++) {
    str += a[i];
  }

  a = str;
  return a;
}

function hexBin(a) {
  var num = hexDec(a);
  var num1 = decBin(num);

  return num1;
}
