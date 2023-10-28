#### Week Ojectives
- 5.1. Use variables to store program state and use operators to change variables.
- 5.2 Use built-in variables and events to create simple interactivity.
- 5.3 Use appropriately named variables and objects to organise code.
### The mouseX and mouseY
```js

/**
In the function draw, you must add the background , not in the setup(). Otherwise, it the object will not be refreshed and will have weird effect on the screen

1. mouseX and mouseY takes your x and y coordinates of your mouse
2. Although the below example has 100,100 as width and height, you can actually just use the word width and height and the object will adjust to the fullest width and height of the canvas. 

**/

function draw(){
background(0,0,0);
ellipse(mouseX,mouseY,100,100); // create an ellipse object which follows you
};

```

### The Events

```js

mousePressed(){} // Do certain action when mouse is pressed

keyPressed(){} // Trigger this when key is pressed

//eg 

mousePressed(){
alert('Hello!'); //Show alert screen on the page saying "Hello!"
}

```

### Tips for naming variable
1. Avoid keywords
2. Avoid weird symbols
3. Avoid long variable names
4. Avoid joke names
5. Avoid abstract name
6. Use camel cases
7. Use underscoring
8. Combine with both methods
9. If too many, replace with methods
10. Be consistent
11. Adapt your variable - Don't be afraid of changing while developing
12. Use "find" and "replace" on IDE for bulk fixes. 

### Object

```js

objectName = {objectA = x , objectB = x , objectC =x}...

```