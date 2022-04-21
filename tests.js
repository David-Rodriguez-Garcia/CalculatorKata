"use strict";
exports.__esModule = true;
var app_js_1 = require("./app.js");
var sc = new app_js_1.StringCalculator();
var addChecker = function (input, expectedOutput, index) {
    var txt;
    var success = true;
    var realOutput = sc.Add(input);
    if (realOutput === expectedOutput) {
        txt = '\nTest n-' + index + ' CORRECT';
    }
    else {
        txt = '\nTest n-' + index + ' ERROR';
        success = false;
    }
    txt += '  -- For input: ' + input + ' -- Expected output: ' + expectedOutput + ' -- Current output: ' + realOutput + '\n';
    return [txt, success];
};
//GENERATE INPUT LOGIC & IMPLEMENTATION
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
//should we accept other ascii characters? - should we pass numbers? - We are assuming that only the characters between 32 - 47 && 58 - 126 will be passed
function generateSeparators() {
    var separators = '';
    for (var c = 0; c < getRandomNumber(1, 10); c++) {
        if (c % 2 === 0) {
            var num = Math.floor(getRandomNumber(32, 47));
            if (num === 45 || num == 46)
                num = 47; //not containing periods nor '-'
            separators += String.fromCharCode(num);
        }
        else {
            separators += String.fromCharCode(Math.floor(getRandomNumber(58, 126)));
        }
    }
    return separators;
}
var generateInput = function () {
    var myArr = [['123,  351', 474], ['123,  ', 0], ['123,  &', 0]];
    for (var i = 0; i < 100; i++) {
        var separatorsTxt = '//' + generateSeparators() + '\n';
        var fnum = getRandomNumber(-90000000000, 90000000000);
        var input = separatorsTxt + fnum;
        var expectedOutput = fnum;
        var separators = (0, app_js_1.getSeparators)(input); //to make sure it works we pass also the content
        for (var c = 0; c < getRandomNumber(1, 100); c++) {
            var newNum = getRandomNumber(-90000000000, 90000000000);
            input += separators[Math.floor(getRandomNumber(0, separators.length))] + newNum;
            expectedOutput += newNum;
        }
        myArr.push([input, expectedOutput]);
    }
    return myArr;
};
var myArr = generateInput();
var numErrors = 0;
var counter = 0;
var trace = "ADD CHECKER TRACE\n\n";
var txtError = "ADD CHECKER TRACE\n\n";
for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
    var _a = myArr_1[_i], input = _a[0], output = _a[1];
    var _b = addChecker(input, output, counter), txt = _b[0], success = _b[1];
    if (!success) {
        numErrors++;
        txtError += '\n' + txt;
    }
    trace = trace.concat('\n', txt);
    counter++;
}
if (numErrors != 0) {
    console.log(txtError);
    console.log('NUM. ERRORS - ' + numErrors);
}
else {
    //console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!');
}
