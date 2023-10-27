function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
  

function setup()
{
	createCanvas(800, 600);
	background(255);
	stroke(0);
	strokeWeight(10);


	

}



function draw()
{
	line(mouseX,mouseY,pmouseX,pmouseY);

}

function mousePressed()
{
	stroke(getRandomInt(256),getRandomInt(256),getRandomInt(256));
}

function keyPressed()
{
	background(255);
}