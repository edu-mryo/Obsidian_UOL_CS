function setup()
{
	//create your canvas here
	createCanvas(2000, 2000);
}



function draw()
{

	background(240);
	fill(255, 60, 100);
	text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

	//do your drawing here
	strokeWeight(0);
	fill(250,133,0,50);
	triangle( 20, 900, 20, 600, 800, 90);

	strokeWeight(0);
	fill(200, 200, 255,50);
	triangle( 900, 900, 0, 60, 800, 400);


	strokeWeight(20);
	fill(243, 221, 191,50);
	ellipse(450, 350, 600, 600);

	strokeWeight(5);
	fill(200, 255, 200,50);
	ellipse(260, 350, 100, 100);	

	strokeWeight(2);
	//fill burgandy
	fill(255, 60, 100,80);
	ellipse(592,481, 100, 100);

	strokeWeight(1);
	line( 380, 350, 600, 100); 
	strokeWeight(3);
	line( 180, 350, 600, 600); 
	strokeWeight(7);
	line( 400, 150, 700, 400);

	//fill really light yellow with opacity of 100
	


}