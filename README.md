To include:

`import {replaceFirstOf, replaceFirstOfEach, replaceAllOf, replaceAllOfEach}   
from '@writetome51/array-replace-first-of-all-of';`

All these functions replace items in an array and return void.  
Any parameter called 'value' cannot be an object.  (It can be an array)  
Any parameter called 'values' cannot contain an object.  (It can contain arrays)  
You can, however, pass an object as a newValue, or have an object inside of newValues.

// replaces first instance of value with newValue  
`replaceFirstOf(value, newValue, array);`

// replaces first instance of each item in values with item with same index in newValues.  
// Example:  first instance of values[0] found in array gets replaced with newValues[0]   
`replaceFirstOfEach(values, newValues, array);`

// replaces all instances of value with newValue  
`replaceAllOf(value, newValue, array);`

// replaces all instances of each item in values with item with same index in newValues.   
// Example:  all instances of values[0] found in array get replaced with newValues[0]   
`replaceAllOfEach(values, newValues, array);`


Examples:

`let arr = [1,2,3,1,2,3,1,2,3];`  
`replaceFirstOf(2, 20, arr);`  
`// arr is now [1,20,3,1,2,3,1,2,3]`

`let arr = [1,2,3,1,2,3,1,2,3];`  
`replaceFirstOfEach([1,2,3], [10,20,30], arr);`  
`// arr is now [10,20,30,1,2,3,1,2,3]`

`let arr = [1,2,3,1,2,3,1,2,3];`  
`replaceAllOf(2, 20, arr);`  
`// arr is now [1,20,3,1,20,3,1,20,3]`

`let arr = [1,2,3,1,2,3,1,2,3];`  
`replaceAllOfEach([1,2,3], [10,20,30], arr);`  
`// arr is now [10,20,30,10,20,30,10,20,30]`
