/*

Officer: 6174876
CaseNum: 702-2-18760086-6174876

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a white car with a NumberPlate of 206ATK. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPIVehicle and the cars in
carObjects_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle() {
	/*
		This function should do the following: 
		 - increment SleuthPIVehicle's KmsAmnt property by its SpeedAmount property 
		 - add a random amount between -0.05 and 0.05 to SleuthPIVehicle's EngineVibrateAmount property
		 - use the constrain function to constrain SleuthPIVehicle's EngineVibrateAmount property to values between 0.07 and 1.12
		 - call the run_motor function passing SleuthPIVehicle as an argument
		*/
	SleuthPIVehicle.KmsAmnt += SleuthPIVehicle.SpeedAmount;
	SleuthPIVehicle.EngineVibrateAmount += random(-0.05, 0.05);
	SleuthPIVehicle.EngineVibrateAmount = constrain(
		SleuthPIVehicle.EngineVibrateAmount,
		0.07,
		1.12
	);
	run_motor(SleuthPIVehicle);
}

function move_lanes(target_vehicle) {
	/*
		This function should do the following: 
		 - move target_vehicle from one lane to the other.
		 - do the move in a single step without any extra animation.
		 - use LanePos_a and LanePos_b to effect the change.
		 - finally you should return target_vehicle at the end of the function.
		 hint: You will need to modify the XPos property of target_vehicle.
		*/
	if (target_vehicle.XPos == LanePos_a) {
		target_vehicle.XPos = LanePos_b;
	} else {
		target_vehicle.XPos = LanePos_a;
	}
	return target_vehicle;
}

function checkVehicle_isInfront(target_car) {
	/*
		This function should do the following: 
		 - determine if target_car is in the same lane and less than 200px behind any of the cars in carObjects_list.
		 - do this by traversing carObjects_list and comparing each car's KmsAmnt property to that of target_car.
		 - use the NumberPlate property of each car to ignore cars that match target_car.
		 - if you find a car that matches these requirements then return the car object. Otherwise return false.
		*/
	for (var i = 0; i < carObjects_list.length; i++) {
		if (
			(carObjects_list[i].KmsAmnt - target_car.KmsAmnt) < 200 &&
			(carObjects_list[i].XPos == target_car.XPos) &&
			(carObjects_list[i].KmsAmnt > target_car.KmsAmnt)
		) {
			if (carObjects_list[i].NumberPlate != target_car.NumberPlate) {
				// move_lanes(target_car);
				// console.log(carObjects_list[i]);
				return carObjects_list[i];
			}
		} 
	}
	return false;
}

function car_parallel() {
	/*
		This function should do the following: 
		 - traverse carObjects_list and determine if any of the cars are parallel with SleuthPIVehicle.
		 - if a car is found to be parallel to SleuthPIVehicle then return the index of that car object.
		 - cars are considered parallel if the absolute difference between their KmsAmnt properties is less than 25 px and they have non-matching XPos properties	*/

	for (var i = 0; i < carObjects_list.length; i++) {
		if (
			abs(carObjects_list[i].KmsAmnt - SleuthPIVehicle.KmsAmnt) < 25 &&
			carObjects_list[i].XPos != SleuthPIVehicle.XPos
		) {
			return i;
		}
	}
}

function check_assailant() {
	/*
		This function should do the following: 
		 - Check cars passing parallel to SleuthPIVehicle to see if they match the NumberPlate property in the assailant description.
		 - it does this by calling car_parallel.
		 - if a positive result is returned then the NumberPlate property of the found car is then checked against the assailant description.
		 - if a match is found then the object of the car in question is returned.
		 - otherwise return false.
		*/
	var i = car_parallel();
	if (i != undefined) {
		if (carObjects_list[i].NumberPlate == "206ATK") {
			return carObjects_list[i];
		}
	}
	return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPIVehicle;

var roadWidth;
var roadLeftEdge;
var LanePos_a;
var LanePos_b;
var carImages = {};
var assailant;

var carObjects_list = [
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: -200,
		CarModel: "whiteCar",
		NumberPlate: "QTN7HU",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 200,
		CarModel: "blueCar",
		NumberPlate: "BWL62D",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 600,
		CarModel: "blueCar",
		NumberPlate: "M1LAZH",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 1000,
		CarModel: "blueCar",
		NumberPlate: "TXLYW3",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 1400,
		CarModel: "greenCar",
		NumberPlate: "9XZCMX",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 1800,
		CarModel: "redCar",
		NumberPlate: "L4F1FK",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 2200,
		CarModel: "redCar",
		NumberPlate: "UKJVWU",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 2600,
		CarModel: "whiteCar",
		NumberPlate: "206ATK",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 3000,
		CarModel: "blueCar",
		NumberPlate: "BEQ67V",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 3400,
		CarModel: "whiteCar",
		NumberPlate: "7C8SEO",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 3800,
		CarModel: "whiteCar",
		NumberPlate: "QUG4H9",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 4200,
		CarModel: "greenCar",
		NumberPlate: "C6QC6W",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 4600,
		CarModel: "blueCar",
		NumberPlate: "NIMIA6",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 5000,
		CarModel: "redCar",
		NumberPlate: "DL6AYU",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 5400,
		CarModel: "greenCar",
		NumberPlate: "YMIMM1",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 5800,
		CarModel: "greenCar",
		NumberPlate: "2P0CZP",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 500,
		YPos: 0,
		KmsAmnt: 6200,
		CarModel: "whiteCar",
		NumberPlate: "8E411T",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 6600,
		CarModel: "greenCar",
		NumberPlate: "QY8X9M",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 7000,
		CarModel: "blueCar",
		NumberPlate: "FJB64O",
		SpeedAmount: 2,
		exhaust: [],
	},
	{
		XPos: 300,
		YPos: 0,
		KmsAmnt: 7400,
		CarModel: "greenCar",
		NumberPlate: "BQAHXE",
		SpeedAmount: 2,
		exhaust: [],
	},
];

function preload() {
	var carTypes = ["detective", "redCar", "greenCar", "blueCar", "whiteCar"];

	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePos_a = 300;
	LanePos_b = 500;

	SleuthPIVehicle = {
		XPos: roadLeftEdge + roadWidth / 4,
		YPos: 550,
		KmsAmnt: 0,
		SpeedAmount: 3,
		EngineVibrateAmount: 0,
		CarModel: "detective",
		NumberPlate: "5L3UTH",
		exhaust: [],
	};
}

function draw() {
	background(0);

	drawRoad();
	drawCars();

	if (assailant) {
		fill(255);

		text("assailant found !", width / 2, height / 2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	move_vehicle();
	var b2b = checkVehicle_isInfront(SleuthPIVehicle);
	if (b2b) move_lanes(SleuthPIVehicle);
	var a = check_assailant();
	if (a != false) assailant = a;

	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carObjects_list.length; i++) {
		carObjects_list[i].KmsAmnt += carObjects_list[i].SpeedAmount;
		carObjects_list[i].YPos =
			SleuthPIVehicle.YPos -
			carObjects_list[i].KmsAmnt +
			SleuthPIVehicle.KmsAmnt;
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
			roadLeftEdge + roadWidth / 2,
			i * 100 + (SleuthPIVehicle.KmsAmnt % 100),
			roadLeftEdge + roadWidth / 2,
			i * 100 + 70 + (SleuthPIVehicle.KmsAmnt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image;
	drawExhaust(SleuthPIVehicle);
	image(
		carImages["detective"],
		SleuthPIVehicle.XPos -
		carImages["detective"].width / 2 +
		random(
			-SleuthPIVehicle.EngineVibrateAmount,
			SleuthPIVehicle.EngineVibrateAmount
		),
		SleuthPIVehicle.YPos +
		random(
			-SleuthPIVehicle.EngineVibrateAmount,
			SleuthPIVehicle.EngineVibrateAmount
		)
	);

	//draw all other cars

	for (var i = 0; i < carObjects_list.length; i++) {
		if (
			carObjects_list[i].YPos < height &&
			carObjects_list[i].YPos > -height / 2
		) {
			image(
				carImages[carObjects_list[i].CarModel],
				carObjects_list[i].XPos -
				carImages[carObjects_list[i].CarModel].width / 2,
				carObjects_list[i].YPos
			);
			run_motor(carObjects_list[i]);

			drawExhaust(carObjects_list[i]);
		}
	}
}

function run_motor(car) {
	car.exhaust.push({
		size: 2,
		x: car.XPos,
		y: car.YPos + carImages[car.CarModel].height,
	});

	for (var i = car.exhaust.length - 1; i >= 0; i--) {
		car.exhaust[i].y += max(0.75, car.SpeedAmount / 3);
		if (car.CarModel != "detective")
			car.exhaust[i].y += SleuthPIVehicle.SpeedAmount - car.SpeedAmount;
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
