/*

The Game Project

Week 10

Midterm Assignment

*/

//Character Related
var gameChar_x;
var gameChar_y;
var floorPos_y;
//Character Action
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;
var isFound = false;
// Additional variables for Debugging purpose
var logData = true;
var logButton;
var reset = false;
var resetButton;
// Scenaries related
var canyon;
var trees_x = []; //Declare a variable called trees_x
var clouds = [];
var mountains = [];
var cameraPosX = 0;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  canyon = { x_pos: 0, width: 100 };
  trees_x = [250, 560, 670, 900, 10];
  clouds = [
    { x_pos: 690, y_pos: 100, width: 40, height: 40 },
    { x_pos: 250, y_pos: 70, width: 40, height: 40 },
    { x_pos: 820, y_pos: 50, width: 40, height: 40 },
  ];
  mountains = [
    { x_pos: 100, y_pos: 97 },
    { x_pos: 250, y_pos: 97 },
    { x_pos: 900, y_pos: 97 },
  ];
}

function draw() {
  ///////////DRAWING CODE//////////

  /**
   * Conditional statement for controlling camera position.
   * adding isLeft/isRight = false for locking the camera direction.
   */
  if (isRight) {
    cameraPosX += 3;
    isLeft = false;
  } else if (isLeft) {
    cameraPosX -= 3;
    isRight = false;
  }

  background(100, 155, 255); //Sky
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //Ground in Green

  //Start scrolling background
  push();
  translate(-cameraPosX, 0);

  //For loop mountains
  for (i = 0; i < mountains.length; i++) {
    fill(128, 128, 128, 230);
    triangle(
      mountains[i].x_pos - 100,
      mountains[i].y_pos + 335,
      mountains[i].x_pos + 150,
      mountains[i].y_pos + 335,
      mountains[i].x_pos + 27,
      mountains[i].y_pos + 150
    );
    fill("white");
    triangle(
      mountains[i].x_pos - 8,
      mountains[i].y_pos + 200,
      mountains[i].x_pos + 60,
      mountains[i].y_pos + 200,
      mountains[i].x_pos + 27,
      mountains[i].y_pos + 150
    );
  }

  //Draw the canyon
  fill(0, 0, 255);
  rect(canyon.x_pos + 310, 432, canyon.width + 10, 144);
  fill(139, 69, 19);
  rect(canyon.x_pos + 300, 432, canyon.width / 7, 144);
  rect(canyon.x_pos + 420, 432, canyon.width / 7, 144);
  //Canyon End

  /**
   * Collectable. Default isFound is false
   * If character approaches collectable within certain range
   * Will change to isFound = true
   */
  if (isFound == false) {
    fill(255, 0, 0);
    ellipse(430, 417, 30, 30);
    fill(255, 255, 0, 0);
    stroke(0);
    arc(418, 400, 30, 50, 0, PI / 5.0); // lower quarter circle
    arc(425, 408, 23, 30, 0, PI / 5.0); // lower quarter circle
    fill(255, 0, 0);
    ellipse(430, 417, 30, 30);
    fill(255, 255, 0, 0);
    stroke(0);
    arc(418, 400, 30, 50, 0, PI / 5.0); // lower quarter circle
    arc(425, 408, 20, 5, 0, PI / 5.0); // lower quarter circle
  }
  //Collectable end

  //For looping the trees_x
  for (var i = 0; i < trees_x.length; i++) {
    var treePos_y = height / 1.725;
    //fill brown
    noStroke();
    fill(139, 69, 19);
    rect(trees_x[i], treePos_y, 30, 100);
    // fill green
    fill(0, 155, 0);
    ellipse(trees_x[i] - 30, 333, 60, 60);
    ellipse(trees_x[i] + 20, 333, 60, 60);
    ellipse(trees_x[i] + 65, 333, 60, 60);
    ellipse(trees_x[i] - 4, 290, 60, 60);
    ellipse(trees_x[i] + 45, 290, 60, 60);
    ellipse(trees_x[i] + 20, 250, 60, 60);
  }
  //Tree End

  //For loop clouds
  for (i = 0; i < clouds.length; i++) {
    noStroke();
    fill(255);
    ellipse(
      clouds[i].x_pos,
      clouds[i].y_pos,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      clouds[i].x_pos + 20,
      clouds[i].y_pos - 10,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      clouds[i].x_pos + 20,
      clouds[i].y_pos + 10,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      clouds[i].x_pos + 40,
      clouds[i].y_pos - 10,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      clouds[i].x_pos + 40,
      clouds[i].y_pos + 10,
      clouds[i].width,
      clouds[i].height
    );
    ellipse(
      clouds[i].x_pos + 60,
      clouds[i].y_pos,
      clouds[i].width,
      clouds[i].height
    );
  }
  //Cloud End

  //Game character and its movements
  if (isLeft && isFalling) {
    //Finishing the part of Jumping Left
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);
    ellipse(gameChar_x - 18, gameChar_y - 57, 9, 9);

    fill("#0aa132");
    rect(gameChar_x - 10, gameChar_y - 43, 20, 33);

    fill("black");
    ellipse(gameChar_x - 10, gameChar_y - 15, 12, 12);
    ellipse(gameChar_x + 8, gameChar_y - 8, 12, 12);
  } else if (isRight && isFalling) {
    //Finishing the part of Jumping Right
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);
    ellipse(gameChar_x + 18, gameChar_y - 57, 9, 9);

    fill("#0aa132");
    rect(gameChar_x - 10, gameChar_y - 43, 20, 33);

    fill("black");
    ellipse(gameChar_x - 8, gameChar_y - 8, 12, 12);
    ellipse(gameChar_x + 10, gameChar_y - 15, 12, 12);
  } else if (isLeft) {
    // Walking Left
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);
    ellipse(gameChar_x - 18, gameChar_y - 57, 9, 9);

    fill("#0aa132");
    rect(gameChar_x - 10, gameChar_y - 43, 20, 38);

    fill("black");
    ellipse(gameChar_x - 8, gameChar_y - 2, 12, 12);
    ellipse(gameChar_x + 10, gameChar_y - 2, 12, 12);
  } else if (isRight) {
    // Walking Right
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);
    ellipse(gameChar_x + 18, gameChar_y - 57, 9, 9);

    fill("#0aa132");
    rect(gameChar_x - 10, gameChar_y - 43, 20, 38);

    fill("black");
    ellipse(gameChar_x - 8, gameChar_y - 2, 12, 12);
    ellipse(gameChar_x + 10, gameChar_y - 2, 12, 12);
  } else if (isFalling || isPlummeting) {
    // Facing front fall
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);

    fill("#FFE4C4");
    stroke("black");
    ellipse(gameChar_x, gameChar_y - 55, 5, 5);

    noStroke();
    fill("#0aa132");
    rect(gameChar_x - 15, gameChar_y - 43, 30, 30);
    rect(gameChar_x - 20, gameChar_y - 43, 5, 20);
    rect(gameChar_x + 15, gameChar_y - 43, 5, 20);

    fill("black");
    ellipse(gameChar_x - 10, gameChar_y - 10, 12, 12);
    ellipse(gameChar_x + 10, gameChar_y - 10, 12, 12);
    ellipse(gameChar_x - 16, gameChar_y - 20, 8, 8);
    ellipse(gameChar_x + 16, gameChar_y - 20, 8, 8);
  } else {
    // Dormant facing front
    fill("#FFE4C4");
    ellipse(gameChar_x, gameChar_y - 58, 35, 35);

    fill("#FFE4C4");
    stroke("black");
    ellipse(gameChar_x, gameChar_y - 55, 5, 5);

    noStroke();
    fill("#0aa132");
    rect(gameChar_x - 15, gameChar_y - 43, 30, 38);
    rect(gameChar_x - 20, gameChar_y - 43, 5, 20);
    rect(gameChar_x + 15, gameChar_y - 43, 5, 20);

    fill("black");
    ellipse(gameChar_x - 10, gameChar_y - 3, 12, 12);
    ellipse(gameChar_x + 10, gameChar_y - 3, 12, 12);
    ellipse(gameChar_x - 16, gameChar_y - 20, 8, 8);
    ellipse(gameChar_x + 16, gameChar_y - 20, 8, 8);
  }

  pop();

  //Original Code : Show Game Screen Data for debugging
  logButton = createButton("Log");
  logButton.position(0, 576);
  logButton.mousePressed(flip);
  function flip() {
    logData = !logData;
  }
  if (logData) {
    fill("black");
    text("isFalling: " + isFalling, 10, 12);
    text("isLeft: " + isLeft, 10, 25);
    text("isRight: " + isRight, 10, 37);
    text("isFound: " + isFound, 10, 49);
    text("keyCode:" + keyCode, 10, 60);
    text("isPlummeting: " + isPlummeting, 10, 72);
    text("gameChar_x:" + gameChar_x, 10, 84);
    text("gameChar_y:" + gameChar_y, 10, 96);
    text("floor_pos:" + floorPos_y, 10, 105);
  }
  // Log Button End

  //Original CodeCreate a reset button
  resetButton = createButton("Reset");
  resetButton.position(40, 576);
  resetButton.mousePressed(reset);
  function reset() {
    logData = true;
    isFalling = false;
    isPlummeting = false;
    isFound = false;
    cameraPosX = 0;
    gameChar_x = width / 2;
    gameChar_y = floorPos_y = (height * 3) / 4;
  }
  //Reset Button End

  ///////////INTERACTION CODE//////////
  // Movement
  if (isLeft) {
    gameChar_x -= 3; // Move to left
  } else if (isRight) {
    gameChar_x += 3; // Move to right
  } else if (gameChar_y < floorPos_y) {
    isFalling = true;
    gameChar_y += 2;
  } else if (isPlummeting) {
    gameChar_y += 2;
  } else {
    isFalling = false;
  }

  //Setting collectable as true (invisible) using distance function.
  if (dist(405, 432, gameChar_x, gameChar_y) < 25) {
    isFound = true;
  }
  //Setting distance to make the character plummet into canyon
  if (dist(365, 432, gameChar_x, gameChar_y) < 38) {
    isLeft = false;
    isRight = false;
    isPlummeting = true;
  }
  // Original Code : Resetting the game when character falls
  if (gameChar_y > 700) {
    reset();
  }
  //Original Code End
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);
  // console.log(isFalling);

  if (isFalling || isPlummeting) {
    keyCode = 0;
  } else if (keyCode == 65) {
    console.log("Left Arrow");
    isLeft = true;
  } else if (keyCode == 68) {
    console.log("Right Arrow");
    isRight = true;
    //Original Code : Jump Left and Right
  } else if (keyCode == 87 && isLeft) {
    console.log("Left Jumping");
    isFalling = true;
    gameChar_y -= 100;
  } else if (keyCode == 87 && isRight) {
    console.log("Right Jumping");
    isFalling = true;
    gameChar_y -= 100;
    // Original Code End
  } else if (keyCode == 87) {
    console.log("Jumping");
    gameChar_y -= 100;
  }

}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);
  console.log(isFalling);

  if (keyCode == 65) {
    console.log("Released Left Arrow");
    isLeft = false;
  } else if (keyCode == 68) {
    console.log("Release Right Arrow");
    isRight = false;
  } else if (keyCode == 87) {
    console.log("Released Jump Arrow");
  }
}
