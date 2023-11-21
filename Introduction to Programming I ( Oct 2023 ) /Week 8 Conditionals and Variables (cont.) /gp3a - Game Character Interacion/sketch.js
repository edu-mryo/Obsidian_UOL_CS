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

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
}

function draw() {

	///////////DRAWING CODE//////////


	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	fill('black');
	text("isFalling: "+isFalling,10,12)
	text("isLeft: "+isLeft,10,25)
	text("isRight: "+ isRight,10,37)
	//draw the canyon


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
		isPlummeting = false;
	}
}
