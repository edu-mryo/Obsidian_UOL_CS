function setup()
{
	//create your canvas here
	createCanvas(2000, 2000);
}

function draw()
{
	//do your drawing here
	strokeWeight(30);
	//fill really light brown
	fill(255, 255, 200);
	ellipse(450, 350, 600, 600);

	strokeWeight(5);
	//fill really light pink
	fill(255, 200, 200);
	ellipse(260, 350, 100, 100);	

	strokeWeight(1);
	line( 380, 350, 600, 100); 
	strokeWeight(3);
	line( 180, 350, 600, 600); 

	//fill really light yellow with opacity of 100
	strokeWeight(0.5);
	fill(255, 255, 200, 100);
	triangle( 20, 900, 20, 600, 800, 90);


}