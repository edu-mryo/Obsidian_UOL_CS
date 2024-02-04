/*

Officer: 6174876
CaseNum: 403-3-85324689-6174876

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 85 meters from Norbert's Burrito Stall then alert local police by drawing a MediumSpringGreen circle around it with a radius of 85 pixels.
- if Shiffman is in Gates Department Store then the neighbourhood watch must be notified by drawing a Cyan rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Sienna rectangle covering the area between Berners-Lee Street, Ada Avenue, Mullenweg Street and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;
var dis;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    console.log(mouseX,mouseY)
    image(img,0,0);

    //Write your code below here ...
    //1060,420
    dis= dist(mouseX,mouseY,1060,420)
    // console.log(dis)
    if(dis < 85){
      fill(0,250,154)
      ellipse(1060,420,170,170)
    }else if(mouseX > 2485 && mouseX < 2670 && mouseY > 365 && mouseY < 455){
      fill(0,255,255)
      rect(2485,365,185,90);
    }else{
      fill(160,82,45)
      rect(0,90,3214,205)
      rect(520,350,1900,850)
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

