/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup() {
	createCanvas(400, 600);
}

function draw() {

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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







	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...

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





	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

	fill("#FFE4C4");
	ellipse(gameChar_x, gameChar_y - 58, 35, 35);
	ellipse(gameChar_x - 18, gameChar_y - 57, 9, 9);

	fill("#0aa132");
	rect(gameChar_x - 10, gameChar_y - 43, 20, 35);

	fill('black')
	ellipse(gameChar_x - 8, gameChar_y - 8, 12, 12);
	ellipse(gameChar_x + 10, gameChar_y - 8, 12, 12);



	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

	fill("#FFE4C4");
	ellipse(gameChar_x, gameChar_y - 58, 35, 35);
	ellipse(gameChar_x + 18, gameChar_y - 57, 9, 9);

	fill("#0aa132");
	rect(gameChar_x - 10, gameChar_y - 43, 20, 35);

	fill('black')
	ellipse(gameChar_x - 8, gameChar_y - 8, 12, 12);
	ellipse(gameChar_x + 10, gameChar_y - 8, 12, 12);





	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

	fill("#FFE4C4");
	ellipse(gameChar_x, gameChar_y - 58, 35, 35);
	ellipse(gameChar_x + 18, gameChar_y - 57, 9, 9);

	fill("#0aa132");
	rect(gameChar_x - 10, gameChar_y - 43, 20, 33);

	fill('black')
	ellipse(gameChar_x - 8, gameChar_y - 8, 12, 12);
	ellipse(gameChar_x + 10, gameChar_y - 15, 12, 12);


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

	fill("#FFE4C4");
	ellipse(gameChar_x, gameChar_y - 58, 35, 35);
	ellipse(gameChar_x - 18, gameChar_y - 57, 9, 9);

	fill("#0aa132");
	rect(gameChar_x - 10, gameChar_y - 43, 20, 33);

	fill('black')
	ellipse(gameChar_x - 10, gameChar_y - 15, 12, 12);
	ellipse(gameChar_x + 8, gameChar_y - 8, 12, 12);






}
