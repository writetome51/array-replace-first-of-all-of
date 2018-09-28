"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var replaceAt_replaceAdjacentAt_1 = require("@writetome51/array-insert-replace-basic/replaceAt_replaceAdjacentAt");
// Won't work if value is object.
function replaceFirstOf(value, newValue, array) {
    var index = getFirstIndexOf_1.getFirstIndexOf(value, array);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () { return replaceAt_replaceAdjacentAt_1.replaceAt(index, newValue, array); });
}
exports.replaceFirstOf = replaceFirstOf;
// Won't work if values contains object.
function replaceFirstOfEach(values, newValues, array) {
    var i = -1;
    while (++i < values.length) {
        replaceFirstOf(values[i], newValues[i], array);
    }
}
exports.replaceFirstOfEach = replaceFirstOfEach;
