"use strict";
exports.__esModule = true;
exports.StringCalculator = void 0;
/*TODO - The input seems to be too large for us to handle it. We must check the values we are passing or the conditionals */
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (nums) {
        var arr = nums.split(',');
        //check that we got two numbers, and that both of those numbers are smaller than 15 characters long (number is max 16 digits)
        if (arr.length > 1 && arr.length <= 80) {
            //check their length && that they are numbers && a security for max 80 elements of lenght 14-> Why? -> avoid bugs. Max number 16 digits
            if (arr.every(function (elem) { return !isNaN(parseFloat(elem)); })) {
                var numAr = arr.map(function (elem) { return parseFloat(elem); });
                var result = numAr.reduce(function (acumulator, elem) { return acumulator + elem; }, 0);
                return (result);
            }
        }
        return 0;
    };
    ;
    return StringCalculator;
}());
exports.StringCalculator = StringCalculator;
