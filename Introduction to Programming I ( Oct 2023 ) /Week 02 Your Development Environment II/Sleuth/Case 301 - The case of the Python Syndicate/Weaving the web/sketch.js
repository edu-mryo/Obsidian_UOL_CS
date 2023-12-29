/*
The case of the Python Syndicate
Stage 4

Officer: 6174876
CaseNum: 301-3-40286196-6174876

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var rockyKrayImg;
var annaKarpinskiImg;
var adaLovelaceImg;
var cecilKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;

var annaKarpinskiObject;


//declare your new objects below






function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	adaLovelaceImg = loadImage("ada.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObject = {
		x: 408,
		y: 40,
		image: annaKarpinskiImg
	};

	rockyKrayObject = {
		x: 115,
		y: 40,
		image: rockyKrayImg
	};

	adaLovelaceObject = {
		x: 701,
		y: 40,
		image: adaLovelaceImg
	};

	cecilKarpinskiObject = {
		x: 115,
		y: 309,
		image: cecilKarpinskiImg
	};

	countessHamiltonObject = {
		x: 408,
		y: 309,
		image: countessHamiltonImg
	};

	pawelKarpinskiObject = {
		x: 701,
		y: 309,
		image: pawelKarpinskiImg
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayImg, rockyKrayObject.x, rockyKrayObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(adaLovelaceImg, adaLovelaceObject.x, adaLovelaceObject.y);
	image(cecilKarpinskiImg, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(countessHamiltonImg, countessHamiltonObject.x, countessHamiltonObject.y);
	image(pawelKarpinskiImg, pawelKarpinskiObject.x, pawelKarpinskiObject.y);


}