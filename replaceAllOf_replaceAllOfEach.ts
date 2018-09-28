import { arrayHas } from '@writetome51/array-analysis-basic/arrayHas';
import { replaceFirstOf } from './replaceFirstOf_replaceFirstOfEach';


// value cannot be object.

export function replaceAllOf(value, newValue, array): void {
	while (arrayHas(value, array)) {
		replaceFirstOf(value, newValue, array);
	}
}


// values cannot contain object.

export function replaceAllOfEach(values: any[], newValues: any[], array) {
	let i = -1;
	while (++i < values.length) {
		replaceAllOf(values[i], newValues[i], array);
	}
}