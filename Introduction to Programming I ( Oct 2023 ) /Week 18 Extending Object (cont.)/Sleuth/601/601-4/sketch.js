/*
Officer: 6174876
CaseNum: 601-3-37245018-6174876

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing OliveDrab stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SeaGreen stroke ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 44 pixels of any of the crimes within no more than 0 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- beginShape(), endShape(), vertex()

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var killerLogbook_ptX = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var killerLogbook_ptY = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var killerLogbook_recordDate = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var killingLogbook = {
	Pt_X: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	Pt_Y: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	date: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	Killed_: ['LOUISE ZETLAND', 'LARRAINE PEGORD', 'JACQUELINE DURANTS', 'LESLEY MONKSFORD', 'MAJORIE JENI', 'JAUNITA JOYER', 'SUMMER CASIMERE', 'LAKESHA SYMMES', 'LINETTE MOHWAWK', 'TAMICA MAUBERT', 'TU DAVISWOOD', 'HANG NIEMELA', 'DEEDEE PHINNEY', 'LIANNE COURTWOOD', 'DRUSILLA WARMAN'],
};

function preload() {
	countyMap = loadImage("map.png")
}

function setup() {
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0, 0);

	//add your code below here

	// 	In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
	// where she was last seen. Do this by drawing OliveDrab stroke vertexes at each location.

	for (var i = 0; i < killerLogbook_ptX.length; i++) {
		stroke(107, 142, 35);
		strokeWeight(3);
		// beginShape(POINTS);
		vertex(killerLogbook_ptX[i], killerLogbook_ptY[i]);
		endShape();
	}

	// In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
	// recent crime records, you should mark those locations on the map. Do this by drawing small, SeaGreen stroke ellipses at each location.
	for (var i = 0; i < killingLogbook.Pt_X.length; i++) {
		stroke(46, 139, 87);
		ellipse(killingLogbook.Pt_X[i], killingLogbook.Pt_Y[i], 10, 10)
	}

	// This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 44 pixels of any of the crimes within no more than 0 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

	// { suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

	// Note that the possible matches are already being drawn.
	// Your job is to fill the array with the correct data.

	// Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.


	for (i = 0; i < killerLogbook_ptX.length; i++) {
		if (dist(killerLogbook_ptX[i], killerLogbook_ptY[i], killingLogbook.Pt_X[i], killingLogbook.Pt_Y[i])  < 44  ) {
			possibleMatches.push({ suspect_x: killerLogbook_ptX[i], suspect_y: killerLogbook_ptY[i], crime_x: killingLogbook.Pt_X[i], crime_y: killingLogbook.Pt_Y[i], victimName: killingLogbook.Killed_[i] })
		}
	}

	console.log(possibleMatches)

	// code to draw the matches ( if any)
	for (let i = 0; i < possibleMatches.length; i++) {
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
