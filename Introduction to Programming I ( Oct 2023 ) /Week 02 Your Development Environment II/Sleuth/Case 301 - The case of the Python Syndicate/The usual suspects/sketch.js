/*
The case of the Python Syndicate
Stage 1

Officer: 6174876
CaseNum: 301-0-66588191-6174876

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var adaLovelaceImage;
var bonesKarpinskiImage;
var countessHamiltonImage;
var robbieKrayImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;



//declare your new variables below
var robbieKrayXPosition = 115;
var robbieKrayYPosition = 309;

var adaLovelaceXPosition = 115;
var adaLovelaceYPosition = 40;

var bonesKarpinskiXPosition = 408;
var bonesKarpinskiYPosition = 40;

var countessHamiltonXPosition = 701;
var countessHamiltonYPosition = 40;

var pawelKarpinskiXPosition = 408;
var pawelKarpinskiYPosition = 309;

var cecilKarpinskiXPosition = 701;
var cecilKarpinskiYPosition = 309;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	adaLovelaceImage = loadImage("ada.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(robbieKrayImage, robbieKrayXPosition, robbieKrayYPosition);

	image(adaLovelaceImage, adaLovelaceXPosition, adaLovelaceYPosition);
	image(bonesKarpinskiImage, bonesKarpinskiXPosition , bonesKarpinskiYPosition);
	image(countessHamiltonImage, countessHamiltonXPosition , countessHamiltonYPosition);
	image(pawelKarpinskiImage, pawelKarpinskiXPosition, pawelKarpinskiYPosition);
	image(cecilKarpinskiImage, cecilKarpinskiXPosition, cecilKarpinskiYPosition);

}