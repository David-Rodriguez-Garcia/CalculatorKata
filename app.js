"use strict";
exports.__esModule = true;
exports.StringCalculator = void 0;
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (nums) {
        var arr = nums.split(/[\n,]/);
        if (arr.length > 1 && arr.length <= 80) {
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
