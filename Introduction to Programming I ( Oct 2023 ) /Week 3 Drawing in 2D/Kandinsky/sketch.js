function setup()
{
	//create your canvas here
	createCanvas(2000, 2000);
}

function draw()
{
	//do your drawing here
	strokeWeight(0);
	//fill light orange
	fill(255, 240, 200,50);
	triangle( 20, 900, 20, 600, 800, 90);

	strokeWeight(0);
	//fill sky blue
	fill(200, 200, 255,50);
	triangle( 900, 900, 0, 60, 800, 400);


	strokeWeight(20);
	// fill dark brown
	fill(200, 100, 30,100);	
	// fill(255, 200, 200,50);

	// fill(200, 255, 200,50); 

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
	


}