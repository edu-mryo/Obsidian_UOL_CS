/*
Hack It: Robot Olympics

* Make each robot move down the track by increasing its x coordinate each frame. You will want to add some randomness to this so each robot races at a different speed. 
* Check which robot has won the race and display a message saying which robot won. Remember the lanes will are labelled 1-5 not 0-4. 
* Some other things to try out when you've done the basics: 
	* Switch the robotXs and robotYs arrays to a single array of objects. 
	* Change the look of each robot.  
	* [HARD] Make the robots run the other way, or down the screen not across. 
	* [V HARD] make the race distance longer without increasing the size of the canvas. 
	* [V HARD] add "on your marks.", "Get set" and "go" before the start of the race. 
*/

var finishLineX = 1150;
// Changing robotsXs and robotsYs to an array of objects
var robotCoordinates = [
	{ robotXs: 40, robotYs: 50 },
	{ robotXs: 40, robotYs: 200 },
	{ robotXs: 40, robotYs: 350 },
	{ robotXs: 40, robotYs: 500 },
	{ robotXs: 40, robotYs: 650 }];
var rank = [1, 2, 3, 4, 5];


function setup() {
	createCanvas(1200, 800);

}


function draw() {

	background(200, 100, 0);


	//draw the finish line and first line marker
	strokeWeight(7);
	stroke(255);
	line(finishLineX, 0, finishLineX, height);
	line(0, robotCoordinates[0].robotYs - 20, width, robotCoordinates[0].robotYs - 10);



	for (var i = 0; i < robotCoordinates.length; i++) {

		//draw the robots
		strokeWeight(2);
		stroke(0);

		//robot head
		fill(200);
		rect(robotCoordinates[i].robotXs, robotCoordinates[i].robotYs, 100, 100, 10);

		//ears
		fill(255, 0, 0);

		rect(robotCoordinates[i].robotXs - 7, robotCoordinates[i].robotYs + 30, 10, 33);
		rect(robotCoordinates[i].robotXs + 97, robotCoordinates[i].robotYs + 30, 10, 33);

		//robots' antennas
		fill(250, 250, 0);
		ellipse(robotCoordinates[i].robotXs + 50, robotCoordinates[i].robotYs - 7, 10, 10);

		fill(200, 0, 200);
		rect(robotCoordinates[i].robotXs + 40, robotCoordinates[i].robotYs - 3, 20, 10);

		//eyes
		fill(255);
		ellipse(robotCoordinates[i].robotXs + 25, robotCoordinates[i].robotYs + 30, 26, 26);
		point(robotCoordinates[i].robotXs + 25, robotCoordinates[i].robotYs + 30);
		ellipse(robotCoordinates[i].robotXs + 75, robotCoordinates[i].robotYs + 30, 26, 26);
		point(robotCoordinates[i].robotXs + 75, robotCoordinates[i].robotYs + 30);


		//robots' noses
		fill(255, 0, 0);
		triangle(robotCoordinates[i].robotXs + 50, robotCoordinates[i].robotYs + 35, robotCoordinates[i].robotXs + 35, robotCoordinates[i].robotYs + 60, robotCoordinates[i].robotXs + 65, robotCoordinates[i].robotYs + 60);

		//robot 1 mouth
		noFill();
		beginShape();
		vertex(robotCoordinates[i].robotXs + 28, robotCoordinates[i].robotYs + 75);
		vertex(robotCoordinates[i].robotXs + 36, robotCoordinates[i].robotYs + 85);
		vertex(robotCoordinates[i].robotXs + 42, robotCoordinates[i].robotYs + 75);
		vertex(robotCoordinates[i].robotXs + 50, robotCoordinates[i].robotYs + 85);
		vertex(robotCoordinates[i].robotXs + 58, robotCoordinates[i].robotYs + 75);
		vertex(robotCoordinates[i].robotXs + 66, robotCoordinates[i].robotYs + 85);
		vertex(robotCoordinates[i].robotXs + 74, robotCoordinates[i].robotYs + 75);
		endShape();

		//draw the lower line marker for this lane
		strokeWeight(7);
		stroke(255);
		line(0, robotCoordinates[i].robotYs + 120, width, robotCoordinates[i].robotYs + 120);

		//TODO: update the robots x location 

		robotCoordinates[i].robotXs += random(0, 10);

		//TODO Check if the robot has won and display message!  

		if (robotCoordinates[i].robotXs + 100 >= finishLineX) {
			fill("Black");
			textSize(32);
			text("Robot " + rank[i] + " is the winner!", robotCoordinates[i].robotXs/2, robotCoordinates[i].robotYs+50);
			noLoop();
		}

	}

}