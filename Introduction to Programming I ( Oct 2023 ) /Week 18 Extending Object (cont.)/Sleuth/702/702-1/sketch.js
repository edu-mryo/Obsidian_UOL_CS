/*

Officer: 6174876
CaseNum: 702-0-53758948-6174876

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuth_car to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{
	/*
	This function should do the following: 
	 - increment sleuth_car's miles_travelled property by its accel_value property 
	 - add a random amount between -0.01 and 0.01 to sleuth_car's engineShudder_value property
	 - use the constrain function to constrain sleuth_car's engineShudder_value property to values between 0.03 and 1.02
	 - call the Drive_Motor function passing sleuth_car as an argument
	*/
	sleuth_car.miles_travelled += sleuth_car.accel_value;
	sleuth_car.engineShudder_value+= random(-0.01, 0.01);
	sleuth_car.engineShudder_value = constrain(sleuth_car.engineShudder_value, 0.03, 1.02);
	Drive_Motor(sleuth_car);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_car;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuth_car = 
	{
		coord_x: roadLeftEdge + roadWidth/4,
		coord_y: 300,
		miles_travelled: 0,
		accel_value: 3,
		engineShudder_value: 0,
		car_classification: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Drive_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuth_car.miles_travelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuth_car.miles_travelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuth_car);
	image
	(
		carImages["detective"],
		sleuth_car.coord_x - carImages["detective"].width/2 + random(-sleuth_car.engineShudder_value, sleuth_car.engineShudder_value),
		sleuth_car.coord_y + random(-sleuth_car.engineShudder_value, sleuth_car.engineShudder_value)
	);

}

function Drive_Motor(car)
{

	car.exhaust.push({size: 2, x: car.coord_x, y: car.coord_y + carImages[car.car_classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_value/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
