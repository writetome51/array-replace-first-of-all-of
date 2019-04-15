"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var is_array_not_array_1 = require("@writetome51/is-array-not-array");
var array_replace_at_1 = require("@writetome51/array-replace-at");
// Won't work if value is object.
function replaceFirstOf(value, newValue, array) {
    if ((is_array_not_array_1.isArray(value) && is_array_not_array_1.isArray(newValue) && arrays_match_1.arraysMatch(value, newValue)) ||
        (value === newValue)) {
        throw new Error('The value to replace and the new value are identical.  This is not allowed.');
    }
    var index = array_get_indexes_1.getFirstIndexOf(value, array);
    error_if_index_is_negative_1.errorIfIndexIsNegative(index); // Means value was not found.
    array_replace_at_1.replaceAt(index, newValue, array);
}
exports.replaceFirstOf = replaceFirstOf;
