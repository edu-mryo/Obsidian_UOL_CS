/*

Officer: 6174876
CaseNum: 702-1-39976188-6174876

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

HINT: make sure you take a look at the initialisation of InvestigatorCarObject and the cars in
Cars_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_vehicle() {
	/*
	This function should do the following: 
	 - increment InvestigatorCarObject's DistAmount property by its GasAmt property 
	 - add a random amount between -0.05 and 0.05 to InvestigatorCarObject's ShudderAmt property
	 - use the constrain function to constrain InvestigatorCarObject's ShudderAmt property to values between 0.06 and 0.93
	 - call the drive_motor function passing InvestigatorCarObject as an argument
	*/

	InvestigatorCarObject.DistAmount += InvestigatorCarObject.GasAmt;
	InvestigatorCarObject.ShudderAmt += random(-0.05, 0.05);
	InvestigatorCarObject.ShudderAmt = constrain(InvestigatorCarObject.ShudderAmt, 0.06, 0.93);
	drive_motor(InvestigatorCarObject);
}


function swap_lanes(vehicle) {
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_pos_A and Lane_pos_B to effect the change.
	 hint: You will need to modify the CoordinateX property of vehicle.
	*/

	if (vehicle.CoordinateX === Lane_pos_A) {
		vehicle.CoordinateX = Lane_pos_B;
	}
	else {
		vehicle.CoordinateX = Lane_pos_A;
	}

}


function searchVehicle_isAhead(Vehicle_A, Vehicle_B) {
	/*
	This function should do the following: 
	 - determine if Vehicle_A is in the same lane and less than 200px behind Vehicle_B.
	 - do this by comparing the two cars' DistAmount properties
	 - if these requirements are met then return the LicencePlate property for Vehicle_B. Otherwise return false.
	*/

	if (Vehicle_A.CoordinateX === Vehicle_B.CoordinateX && dist(Vehicle_B.DistAmount , Vehicle_A.DistAmount) < 200 && dist(Vehicle_B.DistAmount , Vehicle_A.DistAmount) > 0) {
		return Vehicle_B.LicencePlate;
	}
	else {
		return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorCarObject;

var roadWidth;
var roadLeftEdge;
var Lane_pos_A;
var Lane_pos_B;
var carImages = {};

var Cars_List = [
	{ CoordinateX: 500, CoordinateY: 0, DistAmount: -200, CarType: 'greenCar', LicencePlate: 'I5TSD7', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 200, CarType: 'redCar', LicencePlate: 'OEH1I7', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 600, CarType: 'greenCar', LicencePlate: '5JUPJ1', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 1000, CarType: 'blueCar', LicencePlate: '8WI3K3', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 1400, CarType: 'blueCar', LicencePlate: 'LUIAZF', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 1800, CarType: 'blueCar', LicencePlate: 'ORNH25', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 2200, CarType: 'redCar', LicencePlate: '26IBXH', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 2600, CarType: 'greenCar', LicencePlate: 'B7EX95', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 3000, CarType: 'redCar', LicencePlate: '7L05GP', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 3400, CarType: 'blueCar', LicencePlate: 'O4UDBD', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 3800, CarType: 'whiteCar', LicencePlate: 'TSWTOA', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 4200, CarType: 'greenCar', LicencePlate: 'F04ZWR', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 4600, CarType: 'whiteCar', LicencePlate: 'BPZQZD', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 5000, CarType: 'whiteCar', LicencePlate: '7A622G', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 5400, CarType: 'blueCar', LicencePlate: 'N5VS1C', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 5800, CarType: 'whiteCar', LicencePlate: 'GODB8X', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 6200, CarType: 'whiteCar', LicencePlate: 'CQ1Y4X', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 6600, CarType: 'whiteCar', LicencePlate: 'SMLU3I', GasAmt: 2, exhaust: [] }, { CoordinateX: 500, CoordinateY: 0, DistAmount: 7000, CarType: 'blueCar', LicencePlate: '9XRSBM', GasAmt: 2, exhaust: [] }, { CoordinateX: 300, CoordinateY: 0, DistAmount: 7400, CarType: 'redCar', LicencePlate: 'J5U278', GasAmt: 2, exhaust: [] }
];



function preload() {
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_pos_A = 300;
	Lane_pos_B = 500;

	InvestigatorCarObject =
	{
		CoordinateX: roadLeftEdge + roadWidth / 4,
		CoordinateY: 550,
		DistAmount: 0,
		GasAmt: 3,
		ShudderAmt: 0,
		CarType: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_vehicle();
	for (var i = 0; i < Cars_List.length; i++) {
		var b2b = searchVehicle_isAhead(InvestigatorCarObject, Cars_List[i]);
		if (b2b) swap_lanes(InvestigatorCarObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < Cars_List.length; i++) {
		Cars_List[i].DistAmount += Cars_List[i].GasAmt;
		Cars_List[i].CoordinateY = InvestigatorCarObject.CoordinateY - Cars_List[i].DistAmount + InvestigatorCarObject.DistAmount;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (InvestigatorCarObject.DistAmount % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (InvestigatorCarObject.DistAmount % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(InvestigatorCarObject);
	image
		(
			carImages["detective"],
			InvestigatorCarObject.CoordinateX - carImages["detective"].width / 2 + random(-InvestigatorCarObject.ShudderAmt, InvestigatorCarObject.ShudderAmt),
			InvestigatorCarObject.CoordinateY + random(-InvestigatorCarObject.ShudderAmt, InvestigatorCarObject.ShudderAmt)
		);

	//draw all other cars

	for (var i = 0; i < Cars_List.length; i++) {
		if (Cars_List[i].CoordinateY < height && Cars_List[i].CoordinateY > -height / 2) {
			image(
				carImages[Cars_List[i].CarType],
				Cars_List[i].CoordinateX - carImages[Cars_List[i].CarType].width / 2,
				Cars_List[i].CoordinateY
			);
			drive_motor(Cars_List[i]);

			drawExhaust(Cars_List[i]);
		}
	}

}

function drive_motor(car) {

	car.exhaust.push({ size: 2, x: car.CoordinateX, y: car.CoordinateY + carImages[car.CarType].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.GasAmt / 3);
		if (car.CarType != "detective") car.exhaust[i].y += (InvestigatorCarObject.GasAmt - car.GasAmt);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
