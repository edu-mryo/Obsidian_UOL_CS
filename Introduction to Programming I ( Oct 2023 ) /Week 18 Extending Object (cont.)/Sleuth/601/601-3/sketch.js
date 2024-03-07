/*
Officer: 6174876
CaseNum: 601-2-30975196-6174876

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumPurple stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MediumSpringGreen stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 66 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var CaseyLogbook_coord_x = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var CaseyLogbook_coord_y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var IncidentRecord_locationX = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var IncidentRecord_locationY = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var IncidentRecord_fatalityName = ['DARBY MYRLE', 'JENIFFER DEAUVILLE', 'KITTY THAXTER', 'DRUSILLA WARMAN', 'MAJORIE JENI', 'MALINDA GOODBURY', 'LINETTE MOHWAWK', 'NELSON TINTLE', 'LIANNE COURTWOOD', 'JACQUELINE DURANTS', 'HANG NIEMELA', 'PIERRE DORCEY', 'JULIANA ADVERSANE', 'TU DAVISWOOD'];


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
	// where she was last seen. Do this by drawing small, MediumPurple stroke triangles centered over each location.

	for (var i = 0; i < CaseyLogbook_coord_x.length; i++) {
		stroke(147, 112, 219);
		triangle(CaseyLogbook_coord_x[i] - 5, CaseyLogbook_coord_y[i] + 5, CaseyLogbook_coord_x[i], CaseyLogbook_coord_y[i] - 5, CaseyLogbook_coord_x[i] + 5, CaseyLogbook_coord_y[i] + 5)
	};


	// In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
	// recent crime records, you should mark those locations on the map. Do this by drawing small, 
	//MediumSpringGreen stroke rectangles centered over each location.


	for (var i = 0; i < IncidentRecord_locationX.length; i++) {
		stroke(0, 250, 154);
		rect(IncidentRecord_locationX[i] - 5, IncidentRecord_locationY[i]-5, 10,10)
	}

	// Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 66 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

	// { suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

	// Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.


	for (let i = 0; i < CaseyLogbook_coord_x.length; i++) {
		// for (let j = 0; j < IncidentRecord_locationX.length; j++) {
			
				if (dist(CaseyLogbook_coord_x[i], CaseyLogbook_coord_y[i], IncidentRecord_locationX[i], IncidentRecord_locationY[i]) < 66) {
					possibleMatches.push({ suspect_x: CaseyLogbook_coord_x[i], suspect_y: CaseyLogbook_coord_y[i], crime_x: IncidentRecord_locationX[i], crime_y: IncidentRecord_locationY[i], victimName: IncidentRecord_fatalityName[i] })
				
			}
		// }
	}

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
