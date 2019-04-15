"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var replaceFirstOf_1 = require("./replaceFirstOf");
// value cannot be object.
function replaceAllOf(value, newValue, array) {
    while (array_has_1.arrayHas(value, array)) {
        replaceFirstOf_1.replaceFirstOf(value, newValue, array);
    }
}
exports.replaceAllOf = replaceAllOf;
