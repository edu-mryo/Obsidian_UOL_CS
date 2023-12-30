## User defined Functions and Scopes

### What is function(s):
- `A JavaScript function is a block of code designed to perform a particular task.A JavaScript function is executed when "something" invokes it (calls it).`

- When code gets longer, it is typically recommended to write a function to minimize repetitive codes. JavaScript function starts with `function` declaraction with name and parenthesis `()`. The parenthesis can accept input if you declare it.

- Adding `return` within the function can 
   1. End the function with no value returned 
   2. End the function with returning some values. 
- Functions can return various values. It does not need to be String, Boolean . It can be Object 

- You can nest function inside a function. We usually use nested function when the outer layer function meets specific logic / criteria. 

- Having a function which repeats until it meets condition is called `recursive`. The function usually has some logic and will reduce the count every run. Once the count hits certain value , it should stop the call.

   - If the logic is not properly implemented the recursive becomes an `Infinite loop/recursion`

## Code Examples

Function Without `return` , input and output
```js
function functionName(){
    //Add Logic here
};
```

 Function with `return`

```js
function functionName(){

    if (logic){
       // execute
    }else{
        return; //End the function
    }

};
```

Function with `return` value/data

```js
function functionName(){

    if(logic){
        return `value_x`
    }else{
        return;
    }
}

var returnedValue = functionName();

```

Function with input value/data

```js

function functionName(x){
    x + 100;
    return x;
}

console.log(functionName(10)); // Should console.log 110.

```


### Resources
- [JavaScript Functions (w3Schools)](https://www.w3schools.com/js/js_functions.asp)

- [How Functions Work in JavaScript – JS Function Code Examples
](https://www.freecodecamp.org/news/understanding-functions-in-javascript/)

