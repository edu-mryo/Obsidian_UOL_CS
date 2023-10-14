/*

Officer: 6174876
CaseNum: 101-3-92612224-6174876

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Teal filled rectangle with a Sandy Brown outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Deep Sky Blue filled
rectangle with a Medium Blue outline around him.

Identify the man reading the newspaper by drawing a Magenta filled rectangle
with a Orange outline around him.

Identify the woman with the dog by drawing a Crimson filled rectangle with a
Slate Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

// 	Identify Anna by drawing a Teal filled rectangle with a Sandy Brown outline.
// She’s the woman in the red dress of course.
	fill(0, 128, 128, 100);
	stroke(244, 164, 96);
	rect(335, 97, 180, 375);

// 	Identify the man with the monocle smoking the cigar by drawing a Deep Sky Blue filled
// rectangle with a Medium Blue outline around him.

	fill(0, 191, 255, 100);
	stroke(0, 0, 205);
	rect(1160, 240, 175, 232);

// 	Identify the man reading the newspaper by drawing a Magenta filled rectangle
// with a Orange outline around him.

	fill(255, 0, 255, 100);
	stroke(255, 165, 0);
	rect(1570, 197, 280, 525);

// 	Identify the woman with the dog by drawing a Crimson filled rectangle with a
// Slate Blue outline around her. Make sure you include the dog too.

	fill(220, 20, 60, 100);
	stroke(106, 90, 205);
	rect(725, 115, 200, 435);


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
