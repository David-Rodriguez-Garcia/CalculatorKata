"use strict";
exports.__esModule = true;
exports.StringCalculator = exports.getSeparators = void 0;
function getSeparators(txt) {
    var ar = [',', '\n']; //initial separators
    if (txt[0] == '/' && txt[1] === '/') {
        var newSep = Array.from(txt.split('\n', 2)[0]); //the new separators array
        newSep.splice(0, 2); //take out the initial //
        ar = ar.concat(newSep);
        //now ar is clean with only the separators as an array list
        //console.log('SEPARATORS ' + ar[0]);
    }
    return ar;
}
exports.getSeparators = getSeparators;
// ERROR -  IN THE SPLIT(separator, 2) IT ONLY GIVES THE FIRST TWO ELEMENTS, BUT THE REST ARE EXCLUDED
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (nums) {
        var separators = getSeparators(nums);
        var arr;
        if (nums[0] == '/' && nums[1] == '/') {
            //number string without the initial separators
            var numArr = nums.split('\n');
            numArr.shift(); //delete the first element
            var numString = numArr.join(','); //join the array to create a string
            for (var _i = 0, separators_1 = separators; _i < separators_1.length; _i++) {
                var separator = separators_1[_i];
                var temNumArr = numString.split(separator); //temporary numeric array
                numString = temNumArr.join(',');
            }
            arr = numString.split(',');
        }
        else {
            //arr now numString
            arr = nums.split(/[\n,]/);
        }
        //filter results
        //arr = arr.filter(elem => elem!='')
        if (arr.length > 1 && arr.length <= 80) {
            if (arr.every(function (elem) { return !isNaN(parseFloat(elem)); })) {
                var numAr = arr.map(function (elem) { return parseFloat(elem); });
                var result = numAr.reduce(function (acumulator, elem) { return acumulator + elem; }, 0);
                return (result);
            }
            else {
                console.log('REJECTED ARRAY: ' + arr);
            }
        }
        return 0;
    };
    ;
    return StringCalculator;
}());
exports.StringCalculator = StringCalculator;
