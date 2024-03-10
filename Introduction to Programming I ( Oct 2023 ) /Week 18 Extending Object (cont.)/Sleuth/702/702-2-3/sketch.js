/*

Officer: 6174876
CaseNum: 702-1-36956473-6174876

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

HINT: make sure you take a look at the initialisation of sleuthPI_vehicle and the cars in
Car_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle() {
  /*
	  This function should do the following: 
	   - increment sleuthPI_vehicle's distance_travelled property by its gas_amount property 
	   - add a random amount between -0.04 and 0.04 to sleuthPI_vehicle's rumble_amount property
	   - use the constrain function to constrain sleuthPI_vehicle's rumble_amount property to values between 0.03 and 1
	   - call the cycleMotor function passing sleuthPI_vehicle as an argument
	  */
  sleuthPI_vehicle.distance_travelled += sleuthPI_vehicle.gas_amount;
  sleuthPI_vehicle.rumble_amount += random(-0.04, 0.04);
  sleuthPI_vehicle.rumble_amount = constrain(
    sleuthPI_vehicle.rumble_amount,
    0.03,
    1
  );
  cycleMotor(sleuthPI_vehicle);
}

function switchLanes(carObj) {
  /*
	  This function should do the following: 
	   - move carObj from one lane to the other.
	   - do the move in a single step without any extra animation.
	   - use LanePos_A and LanePos_B to effect the change.
	   hint: You will need to modify the x_pos property of carObj.
	  */
  if (carObj.x_pos === LanePos_A) {
    carObj.x_pos = LanePos_B;
  } else {
    carObj.x_pos = LanePos_A;
  }
}

function searchCarIsAhead(TargetVehicle_A, TargetVehicle_B) {
  /*
	  This function should do the following: 
	   - determine if TargetVehicle_A is in the same lane and less than 200px behind TargetVehicle_B.
	   - do this by comparing the two cars' distance_travelled properties
	   - if these requirements are met then return true. Otherwise return false.
	  */
  if (
    TargetVehicle_A.x_pos == TargetVehicle_B.x_pos &&
	(TargetVehicle_B.distance_travelled - TargetVehicle_A.distance_travelled) >= 0 &&
    (TargetVehicle_B.distance_travelled - TargetVehicle_A.distance_travelled) <
      200 
    
  ) {
    return true;
  } else {
    return false;
  }
  // }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_vehicle;

var roadWidth;
var roadLeftEdge;
var LanePos_A;
var LanePos_B;
var carImages = {};

var Car_List = [
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: -200,
    vehicle_category: "greenCar",
    licence_plate: "VXT9DH",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 200,
    vehicle_category: "whiteCar",
    licence_plate: "A8962Q",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 600,
    vehicle_category: "greenCar",
    licence_plate: "4DTN7K",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 1000,
    vehicle_category: "redCar",
    licence_plate: "CWY3VP",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 1400,
    vehicle_category: "redCar",
    licence_plate: "BDA9R4",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 1800,
    vehicle_category: "greenCar",
    licence_plate: "Z1JXDZ",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 2200,
    vehicle_category: "whiteCar",
    licence_plate: "1TW7ND",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 2600,
    vehicle_category: "greenCar",
    licence_plate: "CAXR47",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 3000,
    vehicle_category: "greenCar",
    licence_plate: "KOI6ML",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 3400,
    vehicle_category: "redCar",
    licence_plate: "BTMIWO",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 3800,
    vehicle_category: "whiteCar",
    licence_plate: "E6LTJY",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 4200,
    vehicle_category: "blueCar",
    licence_plate: "BMDXFW",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 4600,
    vehicle_category: "greenCar",
    licence_plate: "I3ZA6G",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 5000,
    vehicle_category: "greenCar",
    licence_plate: "991CEZ",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 5400,
    vehicle_category: "whiteCar",
    licence_plate: "DK0NI0",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 5800,
    vehicle_category: "redCar",
    licence_plate: "NH4PWD",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 6200,
    vehicle_category: "whiteCar",
    licence_plate: "NRXBDP",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 6600,
    vehicle_category: "blueCar",
    licence_plate: "ZXKZIQ",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    distance_travelled: 7000,
    vehicle_category: "whiteCar",
    licence_plate: "T3UIYH",
    gas_amount: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    distance_travelled: 7400,
    vehicle_category: "redCar",
    licence_plate: "3QGXU0",
    gas_amount: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  LanePos_A = 300;
  LanePos_B = 500;

  sleuthPI_vehicle = {
    x_pos: roadLeftEdge + roadWidth / 4,
    y_pos: 550,
    distance_travelled: 0,
    gas_amount: 3,
    rumble_amount: 0,
    vehicle_category: "detective",
    licence_plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  moveVehicle();
  for (var i = 0; i < Car_List.length; i++) {
    var b2b = searchCarIsAhead(sleuthPI_vehicle, Car_List[i]);
    if (b2b) switchLanes(sleuthPI_vehicle);
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < Car_List.length; i++) {
    Car_List[i].distance_travelled += Car_List[i].gas_amount;
    Car_List[i].y_pos =
      sleuthPI_vehicle.y_pos -
      Car_List[i].distance_travelled +
      sleuthPI_vehicle.distance_travelled;
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
      i * 100 + (sleuthPI_vehicle.distance_travelled % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (sleuthPI_vehicle.distance_travelled % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(sleuthPI_vehicle);
  image(
    carImages["detective"],
    sleuthPI_vehicle.x_pos -
      carImages["detective"].width / 2 +
      random(-sleuthPI_vehicle.rumble_amount, sleuthPI_vehicle.rumble_amount),
    sleuthPI_vehicle.y_pos +
      random(-sleuthPI_vehicle.rumble_amount, sleuthPI_vehicle.rumble_amount)
  );

  //draw all other cars

  for (var i = 0; i < Car_List.length; i++) {
    if (Car_List[i].y_pos < height && Car_List[i].y_pos > -height / 2) {
      image(
        carImages[Car_List[i].vehicle_category],
        Car_List[i].x_pos - carImages[Car_List[i].vehicle_category].width / 2,
        Car_List[i].y_pos
      );
      cycleMotor(Car_List[i]);

      drawExhaust(Car_List[i]);
    }
  }
}

function cycleMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.x_pos,
    y: car.y_pos + carImages[car.vehicle_category].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.gas_amount / 3);
    if (car.vehicle_category != "detective")
      car.exhaust[i].y += sleuthPI_vehicle.gas_amount - car.gas_amount;
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
