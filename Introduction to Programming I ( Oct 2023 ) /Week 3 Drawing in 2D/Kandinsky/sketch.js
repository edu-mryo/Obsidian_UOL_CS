function setup()
{
	//create your canvas here
	createCanvas(2000, 2000);
}



function draw()
{
	//Show XY coordinates
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
	fill(255, 60, 100,80);
	ellipse(592,481, 100, 100);

	strokeWeight(0);
	fill(100,100,100,80);
	ellipse(440,324,200,200);

	fill(30,109,9);
	strokeWeight(6);
	ellipse(537,264,150,150);

	fill(219,0,44,90);
	ellipse(342,147,120,120);

	strokeWeight(0);
	fill(128,47,172,100);
	ellipse(557,443,120,120);

	fill(128,167,172)
	ellipse(306, 500, 120, 120);

	fill(128,167,172,100);
	ellipse(436,468,300,300)
	strokeWeight(60);
	point(436,468);

	strokeWeight(20);
	point(651,292);
	strokeWeight(5);
	point(278,536);
	strokeWeight(10);
	point(455,133);



	strokeWeight(1);
	line( 380, 350, 600, 100); 
	strokeWeight(3);
	line( 180, 350, 600, 600); 
	strokeWeight(7);
	line( 400, 150, 700, 400);
	strokeWeight(5);
	line( 400, 200, 700, 450);
	strokeWeight(2);
	line( 400, 250, 700, 500);

	strokeWeight(1);
	line(420,582, 463, 616);
	line(463, 582,420,616);

	//fill really light yellow with opacity of 100
	


}