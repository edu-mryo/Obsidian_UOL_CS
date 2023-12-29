/*
The case of the Python Syndicate
Stage 3


Officer: 6174876
CaseNum: 301-2-56542310-6174876

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna Karpinski has been declared and initialised
- Position each mugshot relative to Anna Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Anna Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Anna Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bonesKarpinskiImage;
var annaKarpinskiImage;
var rockyKrayImage;
var countessHamiltonImage;
var pawelKarpinskiImage;
var adaLovelaceImage;

var annaKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	adaLovelaceImage = loadImage("ada.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);

	image(bonesKarpinskiImage, annaKarpinskiObj.x-293, annaKarpinskiObj.y);
	image(rockyKrayImage, annaKarpinskiObj.x+293, annaKarpinskiObj.y);
	image(countessHamiltonImage, annaKarpinskiObj.x-293, annaKarpinskiObj.y+269);
	image(pawelKarpinskiImage, annaKarpinskiObj.x, annaKarpinskiObj.y+269);
	image(adaLovelaceImage, annaKarpinskiObj.x+293, annaKarpinskiObj.y+269);

}

//408-115 = 293
//309-40 = 269