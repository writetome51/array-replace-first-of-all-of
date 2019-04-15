# replaceFirstOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces first instance of `value` with `newValue` in `array`.

# replaceAllOf(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newValue,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Replaces all instances of `value` with `newValue` in `array`.

NOTICE :  For both functions, any parameter called `value` cannot be an  
object.  It can be an array, as long as the array does not contain an object.

## Installation
`npm i  @writetome51/array-replace-first-of-all-of`


## Examples
```
let arr = [1,2,3,1,2,3,1,2,3];  
replaceFirstOf(2, 20, arr);  
// arr is now [1,20,3,1,2,3,1,2,3]

let arr = [1,2,3,1,2,3,1,2,3];  
replaceAllOf(2, 20, arr);  
// arr is now [1,20,3,1,20,3,1,20,3]
```

## Loading
```
// if using TypeScript:
import { replaceFirstOf, replaceAllOf }   
	from '@writetome51/array-replace-first-of-all-of';

// if using ES5 JavaScript:
var replaceFirstOf = 
    require('@writetome51/array-replace-first-of-all-of').replaceFirstOf;
var replaceAllOf = 
    require('@writetome51/array-replace-first-of-all-of').replaceAllOf;
```
