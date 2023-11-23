/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;
var isFound = false;
var canyon;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	canyon = { x_pos: 0, width: 100 };

}

function draw() {

	///////////DRAWING CODE//////////


	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	fill('black');
	text("isFalling: " + isFalling, 10, 12)
	text("isLeft: " + isLeft, 10, 25);
	text("isRight: " + isRight, 10, 37);
	text("isFound: " + isFound, 10, 49);
	text("keyCode:" + keyCode, 10, 60);
	text("gameChar_x:" + gameChar_x, 10, 72);


	//draw the canyon

	//Canyon from here

	//fill sky blue
	fill(0, 0, 255);
	rect(canyon.x_pos + 310, 432, canyon.width + 10, 144);
	fill(139, 69, 19);
	rect(canyon.x_pos + 300, 432, canyon.width / 7, 144);
	rect(canyon.x_pos + 420, 432, canyon.width / 7, 144);
	//Canyon End





	//the game character
	if (isLeft && isFalling) {
		// add your jumping-left code



	}
	else if (isRight && isFalling) {
		// add your jumping-right code



	}
	else if (isLeft) {
		// add your walking left code


		fill("#FFE4C4");
		ellipse(gameChar_x, gameChar_y - 58, 35, 35);
		ellipse(gameChar_x - 18, gameChar_y - 57, 9, 9);

		fill("#0aa132");
		rect(gameChar_x - 10, gameChar_y - 43, 20, 38);

		fill('black')
		ellipse(gameChar_x - 8, gameChar_y - 2, 12, 12);
		ellipse(gameChar_x + 10, gameChar_y - 2, 12, 12);


	}
	else if (isRight) {
		// add your walking right code

		fill("#FFE4C4");
		ellipse(gameChar_x, gameChar_y - 58, 35, 35);
		ellipse(gameChar_x + 18, gameChar_y - 57, 9, 9);

		fill("#0aa132");
		rect(gameChar_x - 10, gameChar_y - 43, 20, 38);

		fill('black')
		ellipse(gameChar_x - 8, gameChar_y - 2, 12, 12);
		ellipse(gameChar_x + 10, gameChar_y - 2, 12, 12);




	}
	else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code

		fill("#FFE4C4")
		ellipse(gameChar_x, gameChar_y - 58, 35, 35);

		fill('#FFE4C4');
		stroke('black'); // Add stroke to make the nose more obvious
		ellipse(gameChar_x, gameChar_y - 55, 5, 5);

		noStroke();
		fill("#0aa132");
		rect(gameChar_x - 15, gameChar_y - 43, 30, 30);
		rect(gameChar_x - 20, gameChar_y - 43, 5, 20);
		rect(gameChar_x + 15, gameChar_y - 43, 5, 20);


		fill('black')
		ellipse(gameChar_x - 10, gameChar_y - 10, 12, 12);
		ellipse(gameChar_x + 10, gameChar_y - 10, 12, 12);
		ellipse(gameChar_x - 16, gameChar_y - 20, 8, 8);
		ellipse(gameChar_x + 16, gameChar_y - 20, 8, 8);


	}
	else {
		// add your standing front facing code

		fill("#FFE4C4")
		ellipse(gameChar_x, gameChar_y - 58, 35, 35);

		fill('#FFE4C4');
		stroke('black'); // Add stroke to make the nose more obvious
		ellipse(gameChar_x, gameChar_y - 55, 5, 5);

		noStroke();
		fill("#0aa132");
		rect(gameChar_x - 15, gameChar_y - 43, 30, 38);
		rect(gameChar_x - 20, gameChar_y - 43, 5, 20);
		rect(gameChar_x + 15, gameChar_y - 43, 5, 20);


		fill('black')
		ellipse(gameChar_x - 10, gameChar_y - 3, 12, 12);
		ellipse(gameChar_x + 10, gameChar_y - 3, 12, 12);
		ellipse(gameChar_x - 16, gameChar_y - 20, 8, 8);
		ellipse(gameChar_x + 16, gameChar_y - 20, 8, 8);

	}

	//collectable

	if (isFound == false) {
		fill(255, 0, 0);
		ellipse(417, 417, 30, 30);
		fill(255, 255, 0, 0);
		stroke(0);
		arc(405, 400, 30, 50, 0, PI / 5.0); // lower quarter circle
		arc(412, 408, 23, 30, 0, PI / 5.0); // lower quarter circle
		fill(255, 0, 0);
		ellipse(417, 417, 30, 30);
		fill(255, 255, 0, 0);
		stroke(0);
		arc(405, 400, 30, 50, 0, PI / 5.0); // lower quarter circle
		arc(412, 408, 20, 5, 0, PI / 5.0); // lower quarter circle
	}


	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if (isLeft == true) {
		gameChar_x -= 1;
	} else if (isRight == true) {
		gameChar_x += 1;
	} else if (gameChar_y < floorPos_y) {
		gameChar_y += 1.5
		isFalling = true;
	} else {
		isFalling = false;
	}

	//Setting collectable as true (invisible) using distance function.
	if (dist(405, 400, gameChar_x, gameChar_y) < 60) {
		isFound = true;
	}
}


function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
	// console.log(isFalling);



	if (isFalling) {
		keyCode;
	}
	else if
		(keyCode == 65) {
		console.log("Left Arrow");
		isLeft = true;
	} else if (keyCode == 68) {
		console.log("Right Arrow");
		isRight = true;
	} else if (keyCode == 87) {
		console.log('Jumping');
		gameChar_y -= 100;
	}

	//Conditional statment for the character to get item




}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	console.log(isFalling);

	if (keyCode == 65) {
		console.log("Released Left Arrow")
		isLeft = false;
	} else if (keyCode == 68) {
		console.log("Release Right Arrow")
		isRight = false;
	} else if (keyCode == 87) {
		console.log("Released Jump Arrow")
	}
}
