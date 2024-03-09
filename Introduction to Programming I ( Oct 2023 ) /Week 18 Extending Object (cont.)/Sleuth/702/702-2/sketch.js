/*

Officer: 6174876
CaseNum: 702-1-62157445-6174876

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of investigatorVehicleObject and the cars in
CarsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle()
{
	/*
	This function should do the following: 
	 - increment investigatorVehicleObject's milesTravelled property by its speedAmt property 
	 - add a random amount between -0.05 and 0.05 to investigatorVehicleObject's engineShudderVal property
	 - use the constrain function to constrain investigatorVehicleObject's engineShudderVal property to values between 0.05 and 1.05
	 - call the TurnMotor function passing investigatorVehicleObject as an argument
	*/
}


function MoveLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_CoordA and Lane_CoordB to effect the change.
	 hint: You will need to modify the coordinateX property of car.
	*/
}


function SearchCarIsAhead( TargetVehicleA, TargetVehicleB )
{
	/*
	This function should do the following: 
	 - determine if TargetVehicleA is in the same lane and less than 200px behind TargetVehicleB.
	 - do this by comparing the two cars' milesTravelled properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorVehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_CoordA;
var Lane_CoordB;
var carImages = {};

var CarsList = [
{ coordinateX: 300, coordinateY: 0, milesTravelled: -200, vehicleType: 'blueCar', numberPlate: '71QXTL', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 200, vehicleType: 'redCar', numberPlate: 'AHC6BT', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 600, vehicleType: 'greenCar', numberPlate: 'HKHYQ9', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 1000, vehicleType: 'redCar', numberPlate: 'FFMZ3V', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 1400, vehicleType: 'greenCar', numberPlate: 'OPF15X', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 1800, vehicleType: 'greenCar', numberPlate: 'QF0JGK', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 2200, vehicleType: 'greenCar', numberPlate: '09M8M8', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 2600, vehicleType: 'whiteCar', numberPlate: '2QSDLH', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 3000, vehicleType: 'whiteCar', numberPlate: 'XQB8YW', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 3400, vehicleType: 'whiteCar', numberPlate: 'B3S8PB', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 3800, vehicleType: 'blueCar', numberPlate: 'GRY0QR', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 4200, vehicleType: 'whiteCar', numberPlate: 'IIXXVS', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 4600, vehicleType: 'greenCar', numberPlate: 'QRB3C3', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 5000, vehicleType: 'redCar', numberPlate: 'FJ8LDI', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 5400, vehicleType: 'redCar', numberPlate: 'D51W27', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 5800, vehicleType: 'blueCar', numberPlate: 'A5RO0L', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 6200, vehicleType: 'greenCar', numberPlate: 'YGAEZQ', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 6600, vehicleType: 'greenCar', numberPlate: 'LXJ9KB', speedAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, milesTravelled: 7000, vehicleType: 'greenCar', numberPlate: 'ONUAJZ', speedAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, milesTravelled: 7400, vehicleType: 'redCar', numberPlate: 'WLULV1', speedAmt: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_CoordA = 300;
	Lane_CoordB = 500;

	investigatorVehicleObject = 
	{
		coordinateX: roadLeftEdge + roadWidth/4,
		coordinateY: 550,
		milesTravelled: 0,
		speedAmt: 3,
		engineShudderVal: 0,
		vehicleType: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	MoveVehicle();
	for(var i = 0; i < CarsList.length; i++)
	{
var b2b = SearchCarIsAhead(investigatorVehicleObject, CarsList[i]);
		if(b2b)MoveLanes(investigatorVehicleObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarsList.length; i++)
	{
		CarsList[i].milesTravelled += CarsList[i].speedAmt;
		CarsList[i].coordinateY = investigatorVehicleObject.coordinateY - CarsList[i].milesTravelled + investigatorVehicleObject.milesTravelled;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorVehicleObject.milesTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorVehicleObject.milesTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorVehicleObject);
	image
	(
		carImages["detective"],
		investigatorVehicleObject.coordinateX - carImages["detective"].width/2 + random(-investigatorVehicleObject.engineShudderVal, investigatorVehicleObject.engineShudderVal),
		investigatorVehicleObject.coordinateY + random(-investigatorVehicleObject.engineShudderVal, investigatorVehicleObject.engineShudderVal)
	);

	//draw all other cars

	for(var i = 0; i < CarsList.length; i ++)
	{
		if(CarsList[i].coordinateY < height && CarsList[i].coordinateY > -height/2)
		{
			image(
			carImages[CarsList[i].vehicleType],
			CarsList[i].coordinateX - carImages[CarsList[i].vehicleType].width/2,
			CarsList[i].coordinateY
			);
			TurnMotor(CarsList[i]);

			drawExhaust(CarsList[i]);
		}
	}

}

function TurnMotor(car)
{

	car.exhaust.push({size: 2, x: car.coordinateX, y: car.coordinateY + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedAmt/3);
		if(car.vehicleType != "detective")car.exhaust[i].y += (investigatorVehicleObject.speedAmt - car.speedAmt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
