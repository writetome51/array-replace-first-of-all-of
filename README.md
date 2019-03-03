# replaceFirstOf(value, newValue, array): void

Replaces first instance of `value` with `newValue` in `array`.
  
# replaceFirstOfEach(values, newValues, array): void

First instance of `values[i]` found in `array` gets replaced with `newValues[i]`.  
This is repeated for each value in `values`.

# replaceAllOf(value, newValue, array): void

Replaces all instances of `value` with `newValue` in `array`.

# replaceAllOfEach(values, newValues, array): void

All instances of `values[i]` found in `array` get replaced with `newValues[i]`.   
This is repeated for each value in `values`.

For all the functions, any parameter called `value` cannot be an object.  It can be an array.  
Any parameter called `values` cannot contain an object.  It can contain arrays.  
You can, however, pass an object as a `newValue`, or have an object inside of `newValues`.


## Examples
```
let arr = [1,2,3,1,2,3,1,2,3];  
replaceFirstOf(2, 20, arr);  
// arr is now [1,20,3,1,2,3,1,2,3]

let arr = [1,2,3,1,2,3,1,2,3];  
replaceFirstOfEach([1,2,3], [10,20,30], arr);  
// arr is now [10,20,30,1,2,3,1,2,3]

let arr = [1,2,3,1,2,3,1,2,3];  
replaceAllOf(2, 20, arr);  
// arr is now [1,20,3,1,20,3,1,20,3]

let arr = [1,2,3,1,2,3,1,2,3];  
replaceAllOfEach([1,2,3], [10,20,30], arr);  
// arr is now [10,20,30,10,20,30,10,20,30]
```

## Loading
```
import {replaceFirstOf, replaceFirstOfEach, replaceAllOf, replaceAllOfEach}   
	from '@writetome51/array-replace-first-of-all-of';

```
