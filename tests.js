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
var myArr = [['123,  351', 474], ['123,  ', 0], ['123,  &', 0]];
var generateInput = function () {
    for (var i = 0; i < 100; i++) {
        var fnum = getRandomNumber(-90000000000, 90000000000);
        var input = "".concat(fnum);
        var expectedOutput = fnum;
        for (var c = 0; c < getRandomNumber(1, 100); c++) {
            var newNum = getRandomNumber(-90000000000, 90000000000);
            if (c % 2 == 0) {
                input += ',' + newNum;
            }
            else {
                input += '\n' + newNum;
            }
            expectedOutput += newNum;
        }
        myArr.push([input, expectedOutput]);
    }
};
generateInput();
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
    console.log(trace);
    console.log('ADD CHECKER PASSED CLEAN!');
}
