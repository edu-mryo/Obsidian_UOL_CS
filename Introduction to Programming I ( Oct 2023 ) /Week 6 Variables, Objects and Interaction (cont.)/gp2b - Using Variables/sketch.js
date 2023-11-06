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


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground


	//Front facing character
	fill("#FFE4C4")
	ellipse(gameChar_x,gameChar_y-58,35,35);
	
	fill('#FFE4C4');
	stroke('black'); // Add stroke to make the nose more obvious
	ellipse(gameChar_x,gameChar_y-55,5,5);

	noStroke();
	fill("#0aa132");
	rect(gameChar_x-15,gameChar_y-43,30,38);
	rect(gameChar_x-20,gameChar_y-43,5,20);
	rect(gameChar_x+15,gameChar_y-43,5,20);
	
	
	fill('black')
	ellipse(gameChar_x-10,gameChar_y-3,12,12);
	ellipse(gameChar_x+10,gameChar_y-3,12,12);
	ellipse(gameChar_x-16,gameChar_y-20,8,8);
	ellipse(gameChar_x+16,gameChar_y-20,8,8);
	//Front facing character end


}

function mousePressed()
{


}
