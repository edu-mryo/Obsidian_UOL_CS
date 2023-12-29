/*
The case of the Python Syndicate
Stage 2


Officer: 6174876
CaseNum: 301-1-95671161-6174876

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones Karpinski

- The variables for Bones Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Bones Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Bones Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var countessHamiltonImage;
var adaLovelaceImage;
var pawelKarpinskiImage;
var cecilKarpinskiImage;
var bonesKarpinskiImage;
var rockyKrayImage;


var bonesKarpinskiXPosition = 408;
var bonesKarpinskiYPosition = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	adaLovelaceImage = loadImage("ada.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	rockyKrayImage = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiXPosition, bonesKarpinskiYPosition);

	image(countessHamiltonImage, bonesKarpinskiXPosition-293, bonesKarpinskiYPosition-269);
	image(adaLovelaceImage, bonesKarpinskiXPosition, bonesKarpinskiYPosition-269);
	image(pawelKarpinskiImage, bonesKarpinskiXPosition+293, bonesKarpinskiYPosition-269);
	image(cecilKarpinskiImage, bonesKarpinskiXPosition-293, bonesKarpinskiYPosition);
	image(rockyKrayImage, bonesKarpinskiXPosition+293, bonesKarpinskiYPosition);

}

//701-408