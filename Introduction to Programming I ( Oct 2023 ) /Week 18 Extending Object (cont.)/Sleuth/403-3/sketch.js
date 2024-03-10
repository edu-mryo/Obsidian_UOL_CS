/*

Officer: 6174876
CaseNum: 403-3-41324756-6174876

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Romero Avenue.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 85 meters from Norbert's Weiner Stand then alert local police by drawing a DarkSalmon circle around it with a radius of 85 pixels.
- if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a DarkMagenta rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a OrangeRed rectangle covering the area between Berners-Lee Street, Ada Avenue, Romero Avenue and Gosling Road.

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
    image(img,0,0);

    //Write your code below here ...

    // if Shiffman is within 85 meters from Norbert's Weiner Stand then alert local police by drawing a DarkSalmon circle around it with a radius of 85 pixels.
    if (dist(650, 515, mouseX, mouseY) < 85) {
        fill(233,150,122);
        ellipse(650, 515, 170, 170);
    }
    // - if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a DarkMagenta rectangle around it.
    else if (mouseX > 635 && mouseX < 820 && mouseY > 150 && mouseY < 275) {
        fill(139,0,139);
        rect(635, 150, 185, 120);
    }
    // - if Shiffman is in neither position, a global alert must be issued by drawing a OrangeRed rectangle covering the area between Berners-Lee Street, Ada Avenue, Romero Avenue and Gosling Road.
    else {
        fill(255,69,0);
        // rect(0, 95, 2800, 185);
        rect(975, 95, 545, 185);



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

