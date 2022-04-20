var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (nums) {
        var arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length == 2 && arr[0].length < 15 && arr[0].length < 15) {
            var numAr = [parseFloat(arr[0]), parseFloat(arr[1])];
            //check that they are both numbers
            if (!isNaN(numAr[0]) && !isNaN(numAr[1])) {
                //should throw errors -> return (numAr[0] + numAr[1] + 1234567890123456789012345678901234567890);
                return (numAr[0] + numAr[1]);
            }
        }
        return 0;
    };
    ;
    return StringCalculator;
}());
var sc = new StringCalculator();
var trace = "ADD CHECKER TRACE\n\n";
var numErrors = 0;
var addChecker = function (input, expectedOutput, index) {
    var realOutput = sc.Add(input);
    var txt;
    if (realOutput === expectedOutput) {
        txt = '\nTest n-' + index + ' CORRECT';
    }
    else {
        txt = '\nTest n-' + index + ' ERROR';
        numErrors++;
    }
    txt += 'For input: ' + input + '\nExpected output: ' + expectedOutput + '\nCurrent output: ' + realOutput + '\n';
    trace.concat('\n', txt);
};
if (numErrors != 0) {
    console.log(trace);
    console.log('NUM. ERRORS - ' + numErrors);
}
else {
    console.log('ADD CHECKER PASSED CLEAN!');
}
//TEST GENERATION
var myArr = [['', 0], ['1,2', 3], ['13475,0', 13475], ['0,13475', 13475], ['-13475, 3', -13472], ['9007199254740992,0', 0], ['4, 9007199254740990', 0], ['-9007199254740991, - 4', 0], ['-3, -5', -8], ['true', 0]];
var counter = 0;
for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
    var _a = myArr_1[_i], input = _a[0], output = _a[1];
    var x = addChecker(input, output, counter);
    counter++;
}
//addChecker()
