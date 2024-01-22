/*

Officer: 6174876
CaseNum: 401-1-52429043-6174876

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If insecticide goes above 0.66 or SpiderVenom dips below 0.59, try decreasing ethanol by 0.05
	- If alcohol dips below 0.5, try increasing ethanol by 0.04
	- When alcohol dips below 0.72 and polonium dips below 0.37, reduce antibodies by 0.01
	- When insecticide goes above 0.64 and SpiderVenom dips below 0.68, increment antibodies by 0.02
	- When polonium goes above 0.72 and alcohol goes above 0.73, try decreasing Calcium_Chloride by 0.01
	- When insecticide goes above 0.75, try increasing Calcium_Chloride by 0.04
	- When alcohol dips below 0.41, try decreasing sulphates by 0.02
	- When polonium goes above 0.39, increment sulphates by 0.05


Your conditional statements should consider the following poisons:

	- polonium
	- insecticide
	- alcohol
	- SpiderVenom


Your conditional statements should modify the following antidotes:

	- ethanol
	- antibodies
	- Calcium_Chloride
	- sulphates


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var polonium;
var insecticide;
var alcohol;
var SpiderVenom;


//Declare the antidote variables
var ethanol;
var antibodies;
var Calcium_Chloride;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	polonium = 0.5;
	insecticide = 0.5;
	alcohol = 0.5;
	SpiderVenom = 0.5;
	ethanol = 0.5;
	antibodies = 0.5;
	Calcium_Chloride = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 4; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...


	// - If insecticide goes above 0.66 or SpiderVenom dips below 0.59, try decreasing ethanol by 0.05
	// - When insecticide goes above 0.64 and SpiderVenom dips below 0.68, increment antibodies by 0.02
	// - When insecticide goes above 0.75, try increasing Calcium_Chloride by 0.04


	// - If alcohol dips below 0.5, try increasing ethanol by 0.04
	// - When alcohol dips below 0.72 and polonium dips below 0.37, reduce antibodies by 0.01
	// - When alcohol dips below 0.41, try decreasing sulphates by 0.02

	// - When polonium goes above 0.72 and alcohol goes above 0.73, try decreasing Calcium_Chloride by 0.01
	// - When polonium goes above 0.39, increment sulphates by 0.05

	if (insecticide > 0.66 || SpiderVenom < 0.59) {
		ethanol -= 0.05
	}
	if (insecticide > 0.64 && SpiderVenom < 0.68) {
		antibodies += 0.02
	}
	if (insecticide > 0.75) {
		Calcium_Chloride += 0.04
	}

	if (alcohol < 0.5) {
		ethanol += 0.04
	}
	if (alcohol < 0.72 && polonium < 0.37) {
		antibodies -= 0.01
	}
	if (alcohol < 0.41) {
		sulphates -= 0.02
	}

	if (polonium > 0.72 && alcohol > 0.73) {
		Calcium_Chloride -= 0.01
	}
	if (polonium > 0.39) {
		sulphates += 0.05
	}





	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	polonium = nextValue(graphs[0], polonium);
	insecticide = nextValue(graphs[1], insecticide);
	alcohol = nextValue(graphs[2], alcohol);
	SpiderVenom = nextValue(graphs[3], SpiderVenom);


	ethanol = constrain(ethanol, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);
	sulphates = constrain(sulphates, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('polonium: ' + nf(polonium, 1, 2), 20, 20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide, 1, 2), 20, 40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol, 1, 2), 20, 60);
	fill(colors[3]);
	text('SpiderVenom: ' + nf(SpiderVenom, 1, 2), 20, 80);


	//draw the antidotes bar chart
	drawBar(ethanol, 50, 'ethanol');
	drawBar(antibodies, 200, 'antibodies');
	drawBar(Calcium_Chloride, 350, 'Calcium_Chloride');
	drawBar(sulphates, 500, 'sulphates');


}

function nextValue(graph, val) {
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03, 0.03);

	val += delta;
	if (val > 1 || val < 0) {
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph) {
	//draws an array as a graph
	beginShape();
	for (var i = 0; i < graph.length; i++) {
		vertex(width * i / 512, height * 0.5 - graph[i] * height / 3)
	}
	endShape();
}


function drawBar(val, x, name) {
	//draws the bars for bar chart
	noStroke();
	fill(0, 100, 100);
	var mh = height * 0.4 - 50;
	rect(x, (height - 50) - val * mh, 100, val * mh);
	fill(255);
	text(name + ": " + val, x, height - 20);
}
