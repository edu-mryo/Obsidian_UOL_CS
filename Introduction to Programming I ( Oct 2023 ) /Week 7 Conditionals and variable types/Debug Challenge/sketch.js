var redButton;
var alertFlash = true;

function setup()
{
	createCanvas(600, 700);

	redButton = {
		x: width / 2,
		y: height / 2,
		dis: 200,
		activated: false
	}

}

function draw()
{
	background(255);

	if (frameCount / 30 == parseInt(frameCount / 30))
	{
		alertFlash = !alertFlash;
	}

	if (redButton.activated == true)
	{
		background(250, 250, 0);

		if (alertFlash)
		{
			textSize(100);
			text("ALERT!!!", width / 2, height / 2 - redButton.dis);
		}

	}


	fill(255, 0, 0);
	stroke(200, 30, 30);
	strokeWeight(20);
	ellipse(redButton.x, redButton.y, redButton.dis);
	noFill();
	stroke(255, 100, 100);
	arc(redButton.x, redButton.y, redButton.dis, redButton.dis, PI, PI * 2);


	textAlign(CENTER);
	textSize(40);
	strokeWeight(1);
	stroke(0);
	fill(0);
	text("DO NOT PRESS", width / 2, height / 2 + redButton.dis);

}

function mousePressed()
{
	if (dist(mouseX, mouseY, redButton.x, redButton.y) < redButton.dis-90)
	{
		redButton.activated = !redButton.activated;
	}
}