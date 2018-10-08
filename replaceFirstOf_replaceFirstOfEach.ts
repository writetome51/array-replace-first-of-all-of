import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic/getFirstIndexOf';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { replaceAt } from '@writetome51/array-replace-at/replaceAt';


// Won't work if value is object.

export function replaceFirstOf(value, newValue, array): void {
	let index = getFirstIndexOf(value, array);
	ifIndexNotNegative_getActionResult(index, () => replaceAt(index, newValue, array));
}


// Won't work if values contains object.

export function replaceFirstOfEach(values: any[], newValues: any[], array): void {
	let i = -1;
	while (++i < values.length) {
		replaceFirstOf(values[i], newValues[i], array);
	}
}