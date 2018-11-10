"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayHas_1 = require("@writetome51/arrayHas");
var replaceFirstOf_replaceFirstOfEach_1 = require("./replaceFirstOf_replaceFirstOfEach");
// value cannot be object.
function replaceAllOf(value, newValue, array) {
    while (arrayHas_1.arrayHas(value, array)) {
        replaceFirstOf_replaceFirstOfEach_1.replaceFirstOf(value, newValue, array);
    }
}
exports.replaceAllOf = replaceAllOf;
// values cannot contain object.
function replaceAllOfEach(values, newValues, array) {
    var i = -1;
    while (++i < values.length) {
        replaceAllOf(values[i], newValues[i], array);
    }
}
exports.replaceAllOfEach = replaceAllOfEach;
