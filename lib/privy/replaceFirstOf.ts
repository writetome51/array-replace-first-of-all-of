import { arraysMatch } from '@writetome51/arrays-match';
import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { isArray } from '@writetome51/is-array-not-array';
import { replaceAt } from '@writetome51/array-replace-at';


// Won't work if value is object.

export function replaceFirstOf(value, newValue, array): void {

	if ((isArray(value) && isArray(newValue) && arraysMatch(value, newValue)) ||
		(value === newValue)) {
		throw new Error('The value to replace and the new value are identical.  This is not allowed.');
	}
	let index = getFirstIndexOf(value, array);
	errorIfIndexIsNegative(index); // Means value was not found.

	replaceAt(index, newValue, array);
}
