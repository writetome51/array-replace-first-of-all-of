"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var replaceFirstOf_replaceFirstOfEach_1 = require("./replaceFirstOf_replaceFirstOfEach");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
// value cannot be object.
function replaceAllOf(value, newValue, array) {
    while (array_has_1.arrayHas(value, array)) {
        replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(value, newValue, array);
    }
}
exports.replaceAllOf = replaceAllOf;
// values cannot contain object.
function replaceAllOfEach(values, newValues, array) {
    Object.values(arguments).forEach(function (arr) {
        error_if_not_populated_array_1.errorIfNotPopulatedArray(arr);
    });
    if (newValues.length < values.length)
        throw new Error('The array of new values must have at least the' +
            ' same length as the array of values to replace');
    var i = -1;
    while (++i < values.length) {
        replaceAllOf(values[i], newValues[i], array);
    }
}
exports.replaceAllOfEach = replaceAllOfEach;
