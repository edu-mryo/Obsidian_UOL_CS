/*

Officer: 6174876
CaseNum: 702-3-35115878-6174876

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a Licence_Plate of CNXXLA.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Sleuth_VehicleObject and the cars in
vehicleObjects_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar() {
  /*
	  This function should do the following: 
	   - increment Sleuth_VehicleObject's Distance_Travelled property by its Accel_Amt property 
	   - add a random amount between -0.02 and 0.02 to Sleuth_VehicleObject's Rumble_Val property
	   - use the constrain function to constrain Sleuth_VehicleObject's Rumble_Val property to values between 0.07 and 0.84
	   - call the turnMotor function passing Sleuth_VehicleObject as an argument
	  */

  Sleuth_VehicleObject.Distance_Travelled += Sleuth_VehicleObject.Accel_Amt;
  Sleuth_VehicleObject.Rumble_Val += random(-0.02, 0.02);
  Sleuth_VehicleObject.Rumble_Val = constrain(
    Sleuth_VehicleObject.Rumble_Val,
    0.07,
    0.84
  );
  turnMotor(Sleuth_VehicleObject);
}

function crossLanes(car) {
  /*
	  This function should do the following: 
	   - move car from one lane to the other.
	   - do the move in a single step without any extra animation.
	   - use laneCoordinate_a and laneCoordinate_b to effect the change.
	   - finally you should return car at the end of the function.
	   hint: You will need to modify the X_Pos property of car.
	  */

  if (car.X_Pos === laneCoordinate_a) {
    car.X_Pos = laneCoordinate_b;
  } else {
    car.X_Pos = laneCoordinate_a;
  }
  return car;
}

function checkAhead(carObj_a, carObj_b) {
  /*
	  This function should do the following: 
	   - determine if carObj_a is in the same lane and less than 200px behind carObj_b.
	   - do this by comparing the two cars' Distance_Travelled properties
	   - if these requirements are met then return carObj_b. Otherwise return false.
	  */

  if (
    carObj_a.X_Pos === carObj_b.X_Pos &&
    carObj_b.Distance_Travelled - carObj_a.Distance_Travelled < 200 &&
    carObj_b.Distance_Travelled > carObj_a.Distance_Travelled
  ) {
    return carObj_b;
  } else {
    return false;
  }
}

function vehicleIsBySide(vehicle_a, vehicle_b) {
  /*
		  This function should do the following: 
		   - determine if vehicle_a is parallel with vehicle_b.
		   - if vehicle_a is found to be parallel to vehicle_b then return true.
		   - cars are considered parallel if the absolute difference between their Distance_Travelled properties is less than 25 px and they have non-matching X_Pos properties	*/

  if (
    abs(vehicle_a.Distance_Travelled - vehicle_b.Distance_Travelled) < 25 &&
    vehicle_a.X_Pos != vehicle_b.X_Pos
  ) {
    return true;
  }
}

function detectCriminal() {
  /*
		  This function should do the following: 
		   - Check cars passing parallel to Sleuth_VehicleObject to see if they match the Licence_Plate property in the criminal description.
		   - it does this by traversing vehicleObjects_array and calling vehicleIsBySide for each car
	  .	 - if a positive result is returned then the Licence_Plate property of the found car is then checked against the criminal description.
		   - if a match is found then the object of the car in question is returned.
		   - otherwise return false.
		  */

  for (var i = 0; i < vehicleObjects_array.length; i++) {
    if (vehicleIsBySide(Sleuth_VehicleObject, vehicleObjects_array[i])) {
      if (vehicleObjects_array[i].Licence_Plate === "CNXXLA") {
        return vehicleObjects_array[i];
      }
    }
  }
  return false;
}

function pursuingCriminal() {
  /*
		  This function should do the following: 
		   - only operate if the global variable criminal is assigned to an object.
		   - scale the Accel_Amt property of Sleuth_VehicleObject by a factor of 1.001.
		   - use the min function to make sure that Sleuth_VehicleObject's Accel_Amt property does not exceed 6.
		   - it should traverse vehicleObjects_array calling checkAhead for each car to detect any cars in front of Sleuth_VehicleObject.
		   - if a positive result is returned it should check to see if the Licence_Plate property of that car matches that of criminal.
		   - for a match, stopCriminal should be called, otherwise call crossLanes.
		  */

  if (criminal) {
    Sleuth_VehicleObject.Accel_Amt *= 1.001;
    Sleuth_VehicleObject.Accel_Amt = min(6, Sleuth_VehicleObject.Accel_Amt);
    for (var i = 0; i < vehicleObjects_array.length; i++) {
      var b2b = checkAhead(Sleuth_VehicleObject, vehicleObjects_array[i]);
      if (b2b) {
        if (b2b.Licence_Plate === criminal.Licence_Plate) {
          stopCriminal();
        } else {
          crossLanes(Sleuth_VehicleObject);
        }
      }
    }
  }
}
  function stopCriminal() {
    /*
		  This function should do the following: 
		   - set the apprehended property of criminal to true.
		   - set the IsApprehending_Criminal property of Sleuth_VehicleObject to true.
		   - set the Accel_Amt properties of both vehicles to zero.
		  */

    criminal.apprehended = true;
    Sleuth_VehicleObject.IsApprehending_Criminal = true;
    Sleuth_VehicleObject.Accel_Amt = 0;
    criminal.Accel_Amt = 0;
  }

  //////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

  var Sleuth_VehicleObject;

  var roadWidth;
  var roadLeftEdge;
  var laneCoordinate_a;
  var laneCoordinate_b;
  var carImages = {};
  var criminal;

  var vehicleObjects_array = [
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: -200,
      Car_Type: "redCar",
      Licence_Plate: "FMVGF0",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 200,
      Car_Type: "blueCar",
      Licence_Plate: "1AFS5L",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 600,
      Car_Type: "greenCar",
      Licence_Plate: "G7KLBD",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 1000,
      Car_Type: "whiteCar",
      Licence_Plate: "AS1AUV",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 1400,
      Car_Type: "redCar",
      Licence_Plate: "CNXXLA",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 1800,
      Car_Type: "greenCar",
      Licence_Plate: "COKCE6",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 2200,
      Car_Type: "greenCar",
      Licence_Plate: "SNS4TD",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 2600,
      Car_Type: "blueCar",
      Licence_Plate: "H3H1XZ",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 3000,
      Car_Type: "greenCar",
      Licence_Plate: "63145K",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 3400,
      Car_Type: "redCar",
      Licence_Plate: "RZFX2S",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 3800,
      Car_Type: "whiteCar",
      Licence_Plate: "J0Q6LM",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 4200,
      Car_Type: "blueCar",
      Licence_Plate: "CCX25X",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 4600,
      Car_Type: "redCar",
      Licence_Plate: "JG9OGX",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 5000,
      Car_Type: "whiteCar",
      Licence_Plate: "A0J3SJ",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 5400,
      Car_Type: "whiteCar",
      Licence_Plate: "SNCEU9",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 5800,
      Car_Type: "whiteCar",
      Licence_Plate: "AR3M2E",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 6200,
      Car_Type: "whiteCar",
      Licence_Plate: "L5CHFP",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 6600,
      Car_Type: "redCar",
      Licence_Plate: "G8GWY8",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 300,
      Y_Pos: 0,
      Distance_Travelled: 7000,
      Car_Type: "whiteCar",
      Licence_Plate: "3JCBTP",
      Accel_Amt: 2,
      exhaust: [],
    },
    {
      X_Pos: 500,
      Y_Pos: 0,
      Distance_Travelled: 7400,
      Car_Type: "whiteCar",
      Licence_Plate: "1MS3VI",
      Accel_Amt: 2,
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
    laneCoordinate_a = 300;
    laneCoordinate_b = 500;

    Sleuth_VehicleObject = {
      X_Pos: roadLeftEdge + roadWidth / 4,
      Y_Pos: 550,
      Distance_Travelled: 0,
      Accel_Amt: 3,
      Rumble_Val: 0,
      Car_Type: "detective",
      Licence_Plate: "5L3UTH",
      IsApprehending_Criminal: false,
      Chasing_Criminal: false,
      exhaust: [],
    };
  }

  function draw() {
    background(0);

    drawRoad();
    drawCars();

    if (criminal) {
      if (criminal.apprehended) {
        fill(255);

        text("criminal apprehended!", width / 2, height / 2);
      }
    }

    ////////////////////// HANDLE DETECTIVE /////////////////////////

    if (
      !Sleuth_VehicleObject.Chasing_Criminal &&
      !Sleuth_VehicleObject.IsApprehending_Criminal
    ) {
      moveCar();
      for (var i = 0; i < vehicleObjects_array.length; i++) {
        var b2b = checkAhead(Sleuth_VehicleObject, vehicleObjects_array[i]);
        if (b2b) crossLanes(Sleuth_VehicleObject);
      }
      var a = detectCriminal();
      if (a != false) criminal = a;
      if (criminal) Sleuth_VehicleObject.Chasing_Criminal = true;
    } else if (!Sleuth_VehicleObject.IsApprehending_Criminal) {
      pursuingCriminal();
      moveCar();
    }

    ////////////////////// HANDLE ASSAILANT /////////////////////////

    if (criminal) {
      if (!criminal.apprehended) {
        criminal.Accel_Amt = 5;
        for (var i = 0; i < vehicleObjects_array.length; i++) {
          var b2b = checkAhead(criminal, vehicleObjects_array[i]);
          if (b2b) {
            if (b2b.Licence_Plate != criminal.Licence_Plate) {
              crossLanes(criminal);
            }
          }
        }
      }
    }

    //////////////////////HANDLE THE OTHER CARS//////////////////////

    for (var i = 0; i < vehicleObjects_array.length; i++) {
      vehicleObjects_array[i].Distance_Travelled +=
        vehicleObjects_array[i].Accel_Amt;
      vehicleObjects_array[i].Y_Pos =
        Sleuth_VehicleObject.Y_Pos -
        vehicleObjects_array[i].Distance_Travelled +
        Sleuth_VehicleObject.Distance_Travelled;

      if (criminal) {
        if (criminal.apprehended) {
          if (vehicleObjects_array[i].X_Pos == Sleuth_VehicleObject.X_Pos) {
            if (
              vehicleObjects_array[i].Distance_Travelled <
              Sleuth_VehicleObject.Distance_Travelled
            ) {
              if (
                vehicleObjects_array[i].Distance_Travelled -
                  Sleuth_VehicleObject.Distance_Travelled <
                200
              ) {
                crossLanes(vehicleObjects_array[i]);
              }
            }
          }
        }
      }
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
        i * 100 + (Sleuth_VehicleObject.Distance_Travelled % 100),
        roadLeftEdge + roadWidth / 2,
        i * 100 + 70 + (Sleuth_VehicleObject.Distance_Travelled % 100)
      );
    }
  }

  function drawCars() {
    //draw the detective car

    drawExhaust(Sleuth_VehicleObject);
    image(
      carImages["detective"],
      Sleuth_VehicleObject.X_Pos -
        carImages["detective"].width / 2 +
        random(
          -Sleuth_VehicleObject.Rumble_Val,
          Sleuth_VehicleObject.Rumble_Val
        ),
      Sleuth_VehicleObject.Y_Pos +
        random(
          -Sleuth_VehicleObject.Rumble_Val,
          Sleuth_VehicleObject.Rumble_Val
        )
    );

    //draw all other cars

    for (var i = 0; i < vehicleObjects_array.length; i++) {
      if (
        vehicleObjects_array[i].Y_Pos < height &&
        vehicleObjects_array[i].Y_Pos > -height / 2
      ) {
        image(
          carImages[vehicleObjects_array[i].Car_Type],
          vehicleObjects_array[i].X_Pos -
            carImages[vehicleObjects_array[i].Car_Type].width / 2,
          vehicleObjects_array[i].Y_Pos
        );
        turnMotor(vehicleObjects_array[i]);

        drawExhaust(vehicleObjects_array[i]);
      }
    }
  }

  function turnMotor(car) {
    car.exhaust.push({
      size: 2,
      x: car.X_Pos,
      y: car.Y_Pos + carImages[car.Car_Type].height,
    });

    for (var i = car.exhaust.length - 1; i >= 0; i--) {
      car.exhaust[i].y += max(0.75, car.Accel_Amt / 3);
      if (car.Car_Type != "detective")
        car.exhaust[i].y += Sleuth_VehicleObject.Accel_Amt - car.Accel_Amt;
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
