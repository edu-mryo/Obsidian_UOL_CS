var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
		brightness : 255
	};
    
    //TASK: intialise a moon object with an extra property for brightness

	moon ={
		x: 650,
		y: 70,
		diameter: 80,
		brightness: 0
	}

	cloud ={

		x: 400,
		y: 70,
		diameter: 80,
		brightness:255
	}

	//set the initial darkness
	darkness = 0;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.



	//draw the sky
	background(150, 200, 255);
	noStroke();  

	//draw the sun
	fill(255, sun.brightness, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour


	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

	//draw the cloud
	fill(255,cloud.brightness);
	noStroke();
	ellipse(cloud.x, cloud.y, cloud.diameter);
	ellipse(cloud.x-40, cloud.y, cloud.diameter-20);
	ellipse(cloud.x+40, cloud.y, cloud.diameter-20);

    //TASK: You can draw the tree yourself
	fill(139,69,19);
	rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
	fill(0,155,0);
	ellipse(tree.x + (tree.trunkWidth / 2), tree.y - (tree.canopyHeight / 2), tree.canopyWidth, tree.canopyHeight);
    

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
	fill(0,0,0,darkness);
	rect(0,0,800,600);

	fill(255, 255, 255, moon.brightness);
	ellipse(moon.x, moon.y, moon.diameter);

	// frameRate(12);
	// text("X: "+mouseX, 0, height/4);
	// text("Y: "+mouseY, 0, height/2);

}

function mouseMoved(){
	//TASK: use the mouse's position to update the sun's position

	sun.y = max(mouseX,70);
	
	moon.brightness = min(min(mouseX/2,800),255);

	// decrease the cloud.brightness to 0 as mouse move to the right
	cloud.brightness = max(255-mouseX/2,0);
	// increase the darkness as mouse move to the right
	darkness = min(mouseX/2,190);




	

	




	



	//You'll need to map the mouse's position to the sun's position



	//You'll also need to constrain the sun's position so it doesn't go off the screen


}