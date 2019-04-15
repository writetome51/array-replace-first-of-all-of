import { arrayHas } from '@writetome51/array-has';
import { replaceFirstOf } from './replaceFirstOf';


// value cannot be object.

export function replaceAllOf(value, newValue, array): void {
	while (arrayHas(value, array)) {
		replaceFirstOf(value, newValue, array);
	}
}
