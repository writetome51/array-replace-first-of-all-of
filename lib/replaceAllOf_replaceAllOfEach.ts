import { arrayHas } from '@writetome51/array-has';
import { replaceFirstOf } from './replaceFirstOf_replaceFirstOfEach';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


// value cannot be object.

export function replaceAllOf(value, newValue, array): void {
	while (arrayHas(value, array)) {
		replaceFirstOf(value, newValue, array);
	}
}


// values cannot contain object.

export function replaceAllOfEach(values: any[], newValues: any[], array) {
	Object.values(arguments).forEach((arr) => {
		errorIfNotPopulatedArray(arr);
	});
	if (newValues.length < values.length) throw new Error('The array of new values must have at least the' +
		' same length as the array of values to replace');
	let i = -1;
	while (++i < values.length) {
		replaceAllOf(values[i], newValues[i], array);
	}
}
