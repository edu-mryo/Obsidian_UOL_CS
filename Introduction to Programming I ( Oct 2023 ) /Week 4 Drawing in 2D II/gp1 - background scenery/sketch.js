/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function l_cloud(x,y,z){
	ellipse(x,y,z,z);
	ellipse(x+20,y+10,z,z);
	ellipse(x,y+20,z,z);
	ellipse(x-20,y+20,z,z);
	ellipse(x-45,y+10,z,z);
	ellipse(x-20,y,z,z);
}

function draw()
{

	background(100, 155, 255); //fill the sky blue
	fill(255, 60, 100);
	text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
	
	

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	// text("cloud", 200, 100);

	l_cloud(210,120,50);
	// ellipse(211,134,60,60);
	// ellipse(240,144,60,60);
	// ellipse(211,154,60,60);
	// ellipse(190,154,60,60);
	// ellipse(165,144,60,60);
	// ellipse(190,133,60,60);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
