function setup()
{
	createCanvas(800, 600);
	background(255);

	

}



function draw()
{
	stroke(0); 
	strokeWeight(10);
	line(mouseX,mouseY,pmouseX,pmouseY);

}