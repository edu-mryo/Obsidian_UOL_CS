/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	treePos_x = width / 1.9;
	treePos_y = height / 1.72;

	canyon = { x_pos: 0, width: 100 };

	collectable = { x_pos: 100, y_pos: 100, size: 50 };

	mountain = { x_pos: 100, y_pos: 100 };

	cloud = { x_pos: 100, y_pos: 100, width: 40, height: 40 };

}

function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//Cloud and Mountain 

	noStroke();
	fill(255);
	//Cloud in the sky
	ellipse(cloud.x_pos, cloud.y_pos, cloud.width, cloud.height);
	ellipse(cloud.x_pos + 20, cloud.y_pos - 10, cloud.width , cloud.height);
	ellipse(cloud.x_pos + 20, cloud.y_pos + 10, cloud.width , cloud.height);
	ellipse(cloud.x_pos + 40, cloud.y_pos - 10, cloud.width , cloud.height);
	ellipse(cloud.x_pos + 40, cloud.y_pos + 10, cloud.width , cloud.height);
	ellipse(cloud.x_pos + 60, cloud.y_pos, cloud.width , cloud.height);
	noStroke();
	fill(255);
	fill(139, 69, 19, 190);
	//mountain
	triangle(mountain.x_pos - 100, mountain.y_pos + 335, mountain.x_pos + 150, mountain.y_pos + 335, mountain.x_pos + 27, mountain.y_pos + 150);
	fill(255, 255, 255);
	//Cloud casting mountain
	ellipse(cloud.x_pos - 20, cloud.y_pos + 200, cloud.width + 30, cloud.height + 30);
	ellipse(cloud.x_pos, cloud.y_pos + 190, cloud.width + 30, cloud.height + 30);
	ellipse(cloud.x_pos, cloud.y_pos + 210, cloud.width + 30, cloud.height + 30);
	ellipse(cloud.x_pos + 20, cloud.y_pos + 190, cloud.width + 30, cloud.height + 30);
	ellipse(cloud.x_pos + 20, cloud.y_pos + 210, cloud.width + 30, cloud.height + 30);
	ellipse(cloud.x_pos + 40, cloud.y_pos + 200, cloud.width + 30, cloud.height + 30);
	//Cloud and Mountein end

	// Tree 
	// fill brown
	fill(139, 69, 19);
	rect(treePos_x, treePos_y, 30, 100);
	// fill green
	fill(0, 155, 0);
	ellipse(treePos_x - 30, 333, 60, 60);
	ellipse(treePos_x + 20, 333, 60, 60);
	ellipse(treePos_x + 65, 333, 60, 60);
	ellipse(treePos_x - 4, 290, 60, 60);
	ellipse(treePos_x + 45, 290, 60, 60);
	ellipse(treePos_x + 20, 250, 60, 60);
	//Tree ends

	//Canyon from here

	//fill sky blue
	fill(0, 0, 255);
	rect(canyon.x_pos + 310, 432, canyon.width + 10, 144);
	fill(139, 69, 19);
	rect(canyon.x_pos + 300, 432, canyon.width / 7, 144);
	rect(canyon.x_pos + 420, 432, canyon.width / 7, 144);
	//Canyon End

	//Collectable Itenm
	noStroke();
	fill(255);
	fill(255, 0, 0);
	ellipse(collectable.x_pos * 3, collectable.y_pos + 317, collectable.size - 20, collectable.size - 20);
	fill(255, 255, 0, 0);
	stroke(0);
	arc(collectable.x_pos + 187, collectable.y_pos + 300, 30, 50, 0, PI / 5.0); // lower quarter circle
	arc(collectable.x_pos + 193, collectable.y_pos + 307, 23, 5, 0, PI / 5.0); // lower quarter circle
	//collectable item end.


		//Front facing character
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
		//Front facing character end


}

function mousePressed() {
	// Move character where user clicks on the screen.
	gameChar_x = mouseX;
	gameChar_y = mouseY;



}
