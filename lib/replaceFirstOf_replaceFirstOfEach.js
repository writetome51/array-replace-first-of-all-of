"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var array_replace_at_1 = require("@writetome51/array-replace-at");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
// Won't work if value is object.
function replaceFirstOf(value, newValue, array) {
    var index = array_get_indexes_basic_1.getFirstIndexOf(value, array);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () { return array_replace_at_1.replaceAt(index, newValue, array); });
}
exports.replaceFirstOf = replaceFirstOf;
// Won't work if values contains object.
function replaceFirstOfEach(values, newValues, array) {
    Object.values(arguments).forEach(function (arr) {
        error_if_not_populated_array_1.errorIfNotPopulatedArray(arr);
    });
    if (newValues.length < values.length)
        throw new Error('The array of new values must have at least the' +
            ' same length as the array of values to replace');
    var i = -1;
    while (++i < values.length) {
        replaceFirstOf(values[i], newValues[i], array);
    }
}
exports.replaceFirstOfEach = replaceFirstOfEach;
