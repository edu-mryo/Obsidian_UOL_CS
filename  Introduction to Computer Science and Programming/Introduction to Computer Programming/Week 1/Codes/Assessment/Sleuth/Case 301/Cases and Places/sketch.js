/*
The case of the Python Syndicate
Stage 2


Officer: 7360582
CaseNum: 301-1-86637930-7360582

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Anna karpinski

- The variables for Anna karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Anna karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecil_karpinski_img;
var countess_hamilton_img;
var bones_karpinski_img;
var lina_lovelace_img;
var anna_karpinski_img;
var robbie_kray_img;


var anna_karpinski_x_loc = 408;
var anna_karpinski_y_loc = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	lina_lovelace_img = loadImage("lina.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	robbie_kray_img = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_img, anna_karpinski_x_loc, anna_karpinski_y_loc);

	image(cecil_karpinski_img, anna_karpinski_x_loc-293, anna_karpinski_y_loc-269);
	image(countess_hamilton_img, anna_karpinski_x_loc, anna_karpinski_y_loc-269);
	image(bones_karpinski_img, anna_karpinski_x_loc+293, anna_karpinski_y_loc-269);
	image(lina_lovelace_img, anna_karpinski_x_loc-293, anna_karpinski_y_loc);
	image(robbie_kray_img, anna_karpinski_x_loc+293, anna_karpinski_y_loc);

}