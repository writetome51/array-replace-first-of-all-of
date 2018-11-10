import { arrayHas } from '@writetome51/array-has';
import { replaceFirstOf } from './replaceFirstOf_replaceFirstOfEach';
import { _doMultiReplace } from './privy/private_functions';


// value cannot be object.

export function replaceAllOf(value, newValue, array): void {
	while (arrayHas(value, array)) {
		replaceFirstOf(value, newValue, array);
	}
}


// values cannot contain object.

export function replaceAllOfEach(values: any[], newValues: any[], array) {
	_doMultiReplace(replaceAllOf, values, newValues, array);
}
