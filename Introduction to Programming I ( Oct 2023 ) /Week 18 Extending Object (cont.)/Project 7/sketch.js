/*

The Game Project

Week 14

Multiple interactable 

*/

//Character Related
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;
var lives = { stat: 3, x_pos: 15 };
//Character Action
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;
var isFound = false;
// Additional variables for game_data
var game_score = 0;
var jump_sound;
// Scenaries related - mountain
var mountains = []
var mountain_y_pos = 97;
var mountain_start = 100;
var num_mountains = 20;

// Scenaries related - canyon
var canyons = [];
var canyon_y_pos = 432;
var canyon_width = 110;
var canyon_start = 300;
var num_canyons = 5;

// Scenaries related - tree
var trees_x = []
var tree_start = 250;
var num_trees = 8;

// Scenaries related - cloud
var clouds =[]
var clouds_width = 40;
var clouds_height = 40;
var clouds_x_start = 250;
var clouds_y_start = 70;
var num_clouds = 10;

// Draw canyons in random position with limiting to 7;
for (var i = 0; i < num_canyons; i++) {
  random_increase = getRandomNumberAtLeast(200,500);
  if (i == 0) {
    x_pos = canyon_start
  } else { x_pos = canyons[i - 1].x_pos + random_increase }

  canyon = { x_pos: x_pos, y_pos: canyon_y_pos, width:canyon_width }
  canyons.push(canyon)
};

// Draw trees in random position
for(var i=0;i<num_trees;i++){
  random_increase = getRandomNumberAtLeast(tree_start,3000);
  if(i ==0){
    trees_x.push(tree_start)
  }else{trees_x.push(random_increase)}

}

// Draw clouds in random position
for(var i=0;i<num_clouds;i++){
  random_increase_x = getRandomNumberAtLeast(clouds_x_start,200);
  y_pos = getRandomNumberAtLeast(clouds_y_start,200)

  if(i==0){
    x_pos = clouds_x_start;
    // y_pos = clouds_y_start;
  }else{
    x_pos = clouds[i-1].x_pos + random_increase_x; 
    // y_pos = clouds[i-1].y_pos + random_increase_y;
  }
  cloud = {x_pos:x_pos, y_pos:y_pos,width:clouds_width,height:clouds_height}
  clouds.push(cloud);
}


//Making the generation mountain random and scalable
for (var i = 0; i < num_mountains; i++) {
  random_increase = getRandomNumberAtLeast(200,500);
  if (i == 0) {
    x_pos = mountain_start
  } else { x_pos = mountains[i - 1].x_pos + random_increase }

  mountain = { x_pos: x_pos, y_pos: mountain_y_pos }
  mountains.push(mountain)
};


var cameraPosX = 0;
var collectables = [
  { x_pos: 430, y_pos: 417, size: 30, isFound: false },
  { x_pos: 190, y_pos: 417, size: 30, isFound: false },
  { x_pos: 900, y_pos: 417, size: 30, isFound: false },
  { x_pos: 810, y_pos: 417, size: 30, isFound: false }];

var flagPole = { x_pos: 2000, isReached: false };

function preload(){
  soundFormats('mp3','wav');
  jumpSound = loadSound('assets/jump_sound.wav')
  leftjumpSound = loadSound('assets/left_jump_sound.wav')
  congratSound = loadSound('assets/congrats.mp3')
  jumpSound.setVolume(0.1);
  leftjumpSound.setVolume(0.1);
  congratSound.setVolume(0.1);
}

function setup() {
  lives.stat;
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  startGame();
};


function draw() {
  ///////////DRAWING CODE//////////

  /**
   * Conditional statement for controlling camera position.
   * adding isLeft/isRight = false for locking the camera direction.
   */

  if (isRight) {
    cameraPosX += 5;
    isLeft = false;
  } else if (isLeft) {
    cameraPosX -= 5;
    isRight = false;
  }

  background(100, 155, 255); //Sky
  fill('black');
  textStyle(BOLD);
  text(`Game Score: ${game_score}`, 10, 20);
  noStroke();
  fill(0, 155, 0);



  rect(0, floorPos_y, width, height - floorPos_y); //Ground in Green

  //Start scrolling background
  push();
  translate(-cameraPosX, 0);

  //Draw mountains
  drawMountains();


  drawDeadEnd();



  //Draw the canyon
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
    checkCanyon(canyons[i]);
  };

  // drawCanyon(canyon);
  //Canyon End

  /**
   * Collectable. Default isFound is false
   * If character approaches collectable within certain range
   * Will change to isFound = true
   */
  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      drawCollectable(collectables[i]);
      checkCollectable(collectables[i]);
    }
  }
  //Collectable end

  //Draw Trees
  drawTrees();
  //Tree End


  //Draw Clouds
  drawClouds();
  //Cloud End

  renderFlagPole();
  if (flagPole.isReached == false) {
    checkFlagePole()
  }

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
    if (gameChar_y < floorPos_y) {
      gameChar_y += 2;
    } else (
      isFalling = false
    )
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
    if (gameChar_y < floorPos_y) {
      gameChar_y += 1;
    } else (
      isFalling = false
    )
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

  for (var i = 0; i < lives.stat; i++) {
    let x = lives.x_pos + (i * 20)
    heart(x, 25, 10)
    // console.log(lives.stat)
  }


  if (lives.stat < 1) {
    push()
    background('white');
    textSize(50);
    fill('black');
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2)
    textSize(30)
    text("Press Spacebard to Restart", width / 2, height / 1.75)
    pop()
  }
  if (flagPole.isReached) {
    push()
    background('white');
    textSize(50);
    fill('red');
    textAlign(CENTER);
    text("Stage Cleared", width / 2, height / 2);
    textSize(30);
    text("Press Spacebar to Continue", width / 2, height / 1.75)
    congratSound.play();
    congratSound.stop();
    pop()
  }

  checkPlayerDie();


  ///////////INTERACTION CODE//////////
  // Movement
  if (isLeft) {
    gameChar_x -= 5; // Move to left
  } else if (isRight) {
    gameChar_x += 5; // Move to right
  } else if (gameChar_y < floorPos_y) {
    isFalling = true;
    gameChar_y += 2;
  } else if (isPlummeting) {
    gameChar_y += 5;
  } else (isFalling = false)



};

function keyPressed() {

  // console.log("keyPressed: " + key);
  // console.log("keyPressed: " + keyCode);

  if (flagPole.isReached || lives.stat < 1) {
    if (keyCode == 32) {
      lives.stat = 3
      game_score = 0;
      for (var i = 0; i < collectables.length; i++) {
        collectables[i].isFound = false;
        drawCollectable(collectables[i]);
      };
      startGame();
      return
    }
  }
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
    leftjumpSound.play()
  } else if (keyCode == 87 && isRight) {
    console.log("Right Jumping");
    isFalling = true;
    gameChar_y -= 100;
    // Original Code End
  } else if (keyCode == 87) {
    console.log("Jumping");
    gameChar_y -= 100;
    jumpSound.play()
  }

}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  // console.log("keyReleased: " + key);
  // console.log("keyReleased: " + keyCode);
  // console.log(isFalling);

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


function drawClouds() {
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
};
function drawMountains() {
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
};
function drawTrees() {
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
};
function drawCollectable(t_collectable) {
  stroke(0);
  fill(255, 0, 0);
  ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, t_collectable.size);
  fill(255, 255, 0, 0);
  stroke(0);
  arc(t_collectable.x_pos - 12, t_collectable.y_pos - 17, 30, 50, 0, PI / 5.0); // lower quarter circle
  arc(t_collectable.x_pos - 5, t_collectable.y_pos - 9, 20, 5, 0, PI / 5.0); // lower quarter circle
};
function drawCanyon(t_canyon) {
  fill(0, 0, 255);
  rect(t_canyon.x_pos, t_canyon.y_pos, t_canyon.width, height - floorPos_y);
};
function checkCollectable(t_collectable) {

  if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 25) {
    t_collectable.isFound = true
    game_score += 1;
  }


};
function checkCanyon(t_canyon) {
  if ((gameChar_y == t_canyon.y_pos||gameChar_y > t_canyon.y_pos) && (gameChar_x - gameChar_width / 2 > (t_canyon.x_pos)) && (gameChar_x + gameChar_width / 2 < (t_canyon.x_pos + 100))) {
    isLeft = false;
    isRight = false;
    isPlummeting = true;
  }
};

function renderFlagPole() {
  push();
  strokeWeight(5);
  stroke(100);
  line(flagPole.x_pos, floorPos_y, flagPole.x_pos, floorPos_y - 250);
  noStroke();
  if (flagPole.isReached) {
    fill('red')
    rect(flagPole.x_pos, floorPos_y - 250, 60, 35);
  } else {
    fill('black')
    rect(flagPole.x_pos, floorPos_y - 33, 60, 35);
  }
  pop();
}

function checkFlagePole() {
  var d = abs(gameChar_x - flagPole.x_pos)
  if (d < 15) {
    flagPole.isReached = true;
    console.log('Reached!')
  }
}

function checkPlayerDie() {
  if (gameChar_y > 700) {
    lives.stat -= 1;
    startGame();
  }

}

function startGame() {
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  gameChar_width = 24;
  cameraPosX = 0;
  isPlummeting = false;
  flagPole.isReached = false;


}

function drawDeadEnd(){
  fill('brown')
  rect(-1000,floorPos_y-150,200,100)
  rect(-950,floorPos_y-100,20,100)
  rect(-870,floorPos_y-100,20,100)
  fill('yellow')
  text('Dead End U-Turn!',-950,floorPos_y-100);
}

function heart(x, y, size) {
  fill('red')
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}


function getRandomNumberAtLeast(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}