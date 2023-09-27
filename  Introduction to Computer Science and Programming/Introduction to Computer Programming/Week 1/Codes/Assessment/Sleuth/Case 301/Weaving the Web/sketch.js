/*
The case of the Python Syndicate
Stage 4

Officer: 7360582
CaseNum: 301-3-30373123-7360582

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecil_karpinski_img;
var lina_lovelace_img;
var robbie_kray_img;
var pawel_karpinski_img;
var bones_karpinski_img;
var anna_karpinski_img;

var pawel_karpinski_obj;


//declare your new objects below


// var cecil_karpinski_location_x = 115;
// var cecil_karpinski_location_y = 40;
// var lina_lovelace_location_x = 408;
// var lina_lovelace_location_y = 40;
// var robbie_kray_location_x = 701;
// var robbie_kray_location_y = 40;
// var bones_karpinski_location_x = 408;
// var bones_karpinski_location_y = 309;
// var anna_karpinski_location_x = 701;
// var anna_karpinski_location_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	lina_lovelace_img = loadImage("lina.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_obj = {
		x: 115,
		y: 309,
		image: pawel_karpinski_img
	};




	//define your new objects below

	cecil_karpinski_obj = {
		x: 115,
		y: 40};

	lina_lovelace_obj = {
		x: 408,
		y: 40};

	robbie_kray_obj = {
		x: 701,
		y: 40};

	bones_karpinski_obj = {
		x: 408,
		y: 309};

	anna_karpinski_obj = {
		x: 701,
		y: 309};

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_img, cecil_karpinski_obj.x, cecil_karpinski_obj.y);
	image(lina_lovelace_img, lina_lovelace_obj.x, lina_lovelace_obj.y);
	image(robbie_kray_img, robbie_kray_obj.x, robbie_kray_obj.y);
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(bones_karpinski_img, bones_karpinski_obj.x, bones_karpinski_obj.y);
	image(anna_karpinski_img, anna_karpinski_obj.x, anna_karpinski_obj.y);


}