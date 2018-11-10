"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var replaceFirstOf_replaceFirstOfEach_1 = require("./replaceFirstOf_replaceFirstOfEach");
var private_functions_1 = require("./privy/private_functions");
// value cannot be object.
function replaceAllOf(value, newValue, array) {
    while (array_has_1.arrayHas(value, array)) {
        replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(value, newValue, array);
    }
}
exports.replaceAllOf = replaceAllOf;
// values cannot contain object.
function replaceAllOfEach(values, newValues, array) {
    private_functions_1._doMultiReplace(replaceAllOf, values, newValues, array);
}
exports.replaceAllOfEach = replaceAllOfEach;
