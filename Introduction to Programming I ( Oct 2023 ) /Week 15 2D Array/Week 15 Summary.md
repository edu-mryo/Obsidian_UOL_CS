## User defined Functions and Scopes

### 2D array

```js
var my2Darray = [[1,2,3],[4,5,6],[7,8,9]];

console.log(my2Darray[0][0])

//Should return 1

```

**Use `console.table`** in browser console to show 2D array in tables

### Nested for loop

```js

var my2Darray = [[1,2,3],[4,5,6],[7,8,9]];

for(var i = 0; i < my2Darray.length; i++){
    for(var j =0; j < my2Darray[i].length;j++){
        console.log(my2Darray[i][j])
    }
}

// Should show 1,2,3,4,5,6,7,8,9 in order.


```