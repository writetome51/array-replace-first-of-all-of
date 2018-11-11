"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var array_replace_at_1 = require("@writetome51/array-replace-at");
var arrays_match_1 = require("@writetome51/arrays-match");
var private_functions_1 = require("./privy/private_functions");
// Won't work if value is object.
function replaceFirstOf(value, newValue, array) {
    if ((isArray_notArray_1.isArray(value) && isArray_notArray_1.isArray(newValue) && arrays_match_1.arraysMatch(value, newValue)) ||
        (value === newValue)) {
        throw new Error('The value to replace and the new value are identical.  This is not allowed.');
    }
    var index = array_get_indexes_basic_1.getFirstIndexOf(value, array);
    ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        array_replace_at_1.replaceAt(index, newValue, array);
    });
}
exports.replaceFirstOf = replaceFirstOf;
// Won't work if values contains object.
function replaceFirstOfEach(values, newValues, array) {
    private_functions_1._doMultiReplace(replaceFirstOf, values, newValues, array);
}
exports.replaceFirstOfEach = replaceFirstOfEach;
