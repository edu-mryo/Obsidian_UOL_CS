/*

Officer: 6174876
CaseNum: 401-0-88943614-6174876

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If chlorine goes above 0.26, try decreasing BetaBlocker by 0.02
	- When hemlock goes above 0.5, increment BetaBlocker by 0.05
	- If chlorine goes above 0.41, reduce antitoxin by 0.01
	- When hemlock dips below 0.75, raise antitoxin by 0.02
	- When hemlock dips below 0.29, decrease sulphates by 0.05
	- If chlorine dips below 0.47, increment sulphates by 0.01


Your conditional statements should consider the following poisons:

	- hemlock
	- chlorine
	- insecticide


Your conditional statements should modify the following antidotes:

	- BetaBlocker
	- antitoxin
	- sulphates


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var hemlock;
var chlorine;
var insecticide;


//Declare the antidote variables
var BetaBlocker;
var antitoxin;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	hemlock = 0.5;
	chlorine = 0.5;
	insecticide = 0.5;
	BetaBlocker = 0.5;
	antitoxin = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 3; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - If chlorine goes above 0.26, try decreasing BetaBlocker by 0.02
	// - If chlorine goes above 0.41, reduce antitoxin by 0.01
	// - If chlorine dips below 0.47, increment sulphates by 0.01

	// - When hemlock goes above 0.5, increment BetaBlocker by 0.05
	// - When hemlock dips below 0.75, raise antitoxin by 0.02
	// - When hemlock dips below 0.29, decrease sulphates by 0.05

	if (chlorine > 0.26) {
		BetaBlocker -= 0.02
	}
	if (chlorine > 0.41) {
		antitoxin -= 0.01
	}
	if (chlorine < 0.47) {
		sulphates += 0.01
	}
	if (hemlock > 0.5) {
		BetaBlocker += 0.05
	}
	if (hemlock < 0.75) {
		antitoxin += 0.02
	}
	if (hemlock < 0.29) {
		sulphates -= 0.05
	}





	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	hemlock = nextValue(graphs[0], hemlock);
	chlorine = nextValue(graphs[1], chlorine);
	insecticide = nextValue(graphs[2], insecticide);


	BetaBlocker = constrain(BetaBlocker, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);
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
	text('hemlock: ' + nf(hemlock, 1, 2), 20, 20);
	fill(colors[1]);
	text('chlorine: ' + nf(chlorine, 1, 2), 20, 40);
	fill(colors[2]);
	text('insecticide: ' + nf(insecticide, 1, 2), 20, 60);


	//draw the antidotes bar chart
	drawBar(BetaBlocker, 50, 'BetaBlocker');
	drawBar(antitoxin, 200, 'antitoxin');
	drawBar(sulphates, 350, 'sulphates');


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
