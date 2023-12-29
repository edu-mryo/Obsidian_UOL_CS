## for Loop and array
### What is For loop  ?
An iteration of cod0es based on designated count or condition.

#### Pseudo Code Example of a for Loop
- `For i = 0 where i increases 1 every loop and with limiting count to 100, do x.`
    - We setup a counter called `i` (a common variable namme for the for loop) and execute the nested logic. The for loop will also have a rule to add, subtract etc the i count and after i reaches to certain count, the loop should stop. For this case, the typical code would look like `for (var i=0; i<10;i++){logic here}` 

- `John has 0 ball in his basket. Add 1 ball in his basket until he has 10.`

#### Implementing the actual code

- Standard For loop statement
```js
var x = 0

for(x;x<10;x++){
    console.log("Hello World"); //Should console.log 10 times.
}
```

### What is an array ？
- A variable which you can store numerous value in a list style.
- Array is declared by using `[]`. 

#### Pseudo Cod Example of an array
- `[orange, apple, 100 usd, Drivers license]`

#### Implementing the actual code
- Standard array implemntation
```js
var arr = [1,4,"Hello",1000,0.12];

console.log(arr[0]) // should show 1
console.log(arr[2]) // should show TRUE
console.log(arr[7]) // undefined

arr[0] = 100; // Replace 1 with 100

console.log(arr) //Show the entire array
```

#### Some other resources to read

- [Javascript for Loop](https://www.w3schools.com/js/js_loop_for.asp)

- [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)