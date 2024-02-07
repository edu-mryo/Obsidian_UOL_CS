/*
Officer: 6174876
CaseNum: 601-0-70025910-6174876

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, YellowGreen fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var killerData = [ 
  { Coord_X : 127, Coord_Y : 175},
  { Coord_X : 156, Coord_Y : 158},
  { Coord_X : 179, Coord_Y : 192},
  { Coord_X : 200, Coord_Y : 154},
  { Coord_X : 220, Coord_Y : 133},
  { Coord_X : 228, Coord_Y : 168},
  { Coord_X : 249, Coord_Y : 149},
  { Coord_X : 269, Coord_Y : 139},
  { Coord_X : 292, Coord_Y : 168},
  { Coord_X : 321, Coord_Y : 133},
  { Coord_X : 354, Coord_Y : 159},
  { Coord_X : 390, Coord_Y : 144},
  { Coord_X : 396, Coord_Y : 225},
  { Coord_X : 429, Coord_Y : 228},
  { Coord_X : 456, Coord_Y : 230},
  { Coord_X : 467, Coord_Y : 277},
  { Coord_X : 483, Coord_Y : 267},
  { Coord_X : 531, Coord_Y : 291},
  { Coord_X : 547, Coord_Y : 278},
  { Coord_X : 571, Coord_Y : 274},
  { Coord_X : 589, Coord_Y : 318},
  { Coord_X : 637, Coord_Y : 280} 
];


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

  for(var i=0;i<killerData.length;i++){
    fill(154,205,50);
    ellipse(killerData[i].Coord_X,killerData[i].Coord_Y,10,10)
  }


}

//We are not using the draw function this time
