/*
Officer: 6174876
CaseNum: 601-1-10811188-6174876

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Chartreuse stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, OrangeRed stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- triangle() NB. Draw each triangle with the point roughly at its center.

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var KillerLog = [ 
  { PosX : 639, PosY : 288},
  { PosX : 681, PosY : 286},
  { PosX : 712, PosY : 293},
  { PosX : 756, PosY : 310},
  { PosX : 715, PosY : 368},
  { PosX : 701, PosY : 425},
  { PosX : 753, PosY : 436},
  { PosX : 815, PosY : 468},
  { PosX : 795, PosY : 506},
  { PosX : 788, PosY : 497},
  { PosX : 781, PosY : 486},
  { PosX : 768, PosY : 489},
  { PosX : 750, PosY : 500},
  { PosX : 732, PosY : 506},
  { PosX : 714, PosY : 514},
  { PosX : 695, PosY : 531},
  { PosX : 693, PosY : 552},
  { PosX : 654, PosY : 523},
  { PosX : 624, PosY : 500},
  { PosX : 594, PosY : 484},
  { PosX : 555, PosY : 474} 
];


//Recent crime records.

var RobberyData = {
	locationX: [403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415, 561, 562, 751, 680, 626, 701, 838, 322, 468, 625],
	locationY: [401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225, 282, 392, 283, 359, 436, 455, 565, 508, 556, 737],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
  for(var i =0;i<KillerLog.length;i++){
    stroke(127,255,0);
    triangle(KillerLog[i].PosX-5,KillerLog[i].PosY+5,KillerLog[i].PosX,KillerLog[i].PosY-5,KillerLog[i].PosX+5,KillerLog[i].PosY+5);
  }

  for(var i =0;i<RobberyData.locationX.length;i++){
    stroke(255,69,0)
      rect(RobberyData.locationX[i]-5,RobberyData.locationY[i]-5,10,10)
    

  }



}

//We are not using the draw function this time
