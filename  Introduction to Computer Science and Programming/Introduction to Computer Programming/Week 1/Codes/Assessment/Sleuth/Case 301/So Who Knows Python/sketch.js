/*
The case of the Python Syndicate
Stage 3


Officer: 7360582
CaseNum: 301-2-88098518-7360582

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie kray has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Robbie kray object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var pawel_karpinski_img;
var robbie_kray_img;
var bones_karpinski_img;
var anna_karpinski_img;
var rocky_kray_img;
var cecil_karpinski_img;

var robbie_kray_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_obj = {
		x: 408,
		y: 40,
		image: robbie_kray_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);

	image(pawel_karpinski_img, robbie_kray_obj.x - 293, robbie_kray_obj.y);
	image(bones_karpinski_img, robbie_kray_obj.x + 293, robbie_kray_obj.y);
	image(anna_karpinski_img, robbie_kray_obj.x - 293, robbie_kray_obj.y+269);
	image(rocky_kray_img, robbie_kray_obj.x, robbie_kray_obj.y+269);
	image(cecil_karpinski_img, robbie_kray_obj.x+293, robbie_kray_obj.y+269);

}