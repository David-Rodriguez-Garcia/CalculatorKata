"use strict";
exports.__esModule = true;
var app_js_1 = require("./app.js");
var sc = new app_js_1.StringCalculator();
//returns true if no errors, false if errors
var addChecker = function (input, expectedOutput, index) {
    var txt;
    var success = true;
    var realOutput = sc.Add(input);
    if (realOutput === expectedOutput) {
        txt = '\nTest n-' + index + ' CORRECT';
    }
    else {
        txt = '\nTest n-' + index + ' ERROR';
        numErrors++;
        success = false;
    }
    txt += 'For input: ' + input + '\nExpected output: ' + expectedOutput + '\nCurrent output: ' + realOutput + '\n';
    return [txt, success];
};
//GENERATE INPUT LOGIC & IMPLEMENTATION
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
var myArr = [['123,  351', 474], ['123,  ', 474], ['123,  &', 0]];
var generateInput = function () {
    for (var i = 0; i < 100; i++) {
        var fnum = getRandomNumber(-90000000000, 90000000000);
        var snum = getRandomNumber(-90000000000, 90000000000);
        myArr.push([fnum + ',' + snum, fnum + snum]);
    }
};
generateInput();
//const myArr: [string, number][] = [['', 0], ['1,2', 3], ['13475,0', 13475], ['0,13475', 13475], ['-13475, 3', -13472], ['9007199254740992,0', 0], ['4, 9007199254740990', 0], ['-9007199254740991, - 4', 0], ['-3, -5', -8], ['true', 0]]
var numErrors = 0;
var counter = 0;
var trace = "ADD CHECKER TRACE\n\n";
var txtError = "ADD CHECKER TRACE\n\n";
for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
    var _a = myArr_1[_i], input = _a[0], output = _a[1];
    var _b = addChecker(input, output, counter), txt = _b[0], success = _b[1];
    if (!success) {
        numErrors++;
        txtError.concat('\n', txt);
    }
    trace = trace.concat('\n', txt);
    counter++;
}
if (numErrors != 0) {
    console.log(trace);
    console.log('NUM. ERRORS - ' + numErrors);
}
else {
    console.log('ADD CHECKER PASSED CLEAN!');
}
