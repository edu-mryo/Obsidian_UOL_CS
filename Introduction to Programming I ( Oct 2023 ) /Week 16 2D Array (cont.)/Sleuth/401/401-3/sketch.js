/*

Officer: 6174876
CaseNum: 401-3-10344161-6174876

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When chlorine goes above 0.28 or methanol goes above 0.61, whilst at the same time, sarin dips below 0.41, decrease SodiumBicarbonate by 0.04
	- When either nerveGas dips below 0.46, formaldehyde goes above 0.68, cyanide goes above 0.31, or perhaps alcohol dips below 0.66, increment SodiumBicarbonate by 0.03
	- When either sarin goes above 0.7, nerveGas goes above 0.6, or perhaps formaldehyde goes above 0.68, decrease protamine by 0.05
	- If cyanide goes above 0.46, methanol dips below 0.35, and also alcohol goes above 0.47, increase protamine by 0.01
	- When cyanide goes above 0.67 or methanol goes above 0.75, whilst at the same time, formaldehyde dips below 0.61 and lead goes above 0.54, reduce paracetamol by 0.03
	- If either alcohol dips below 0.26, chlorine dips below 0.41, or perhaps nerveGas dips below 0.75, increment paracetamol by 0.04
	- If nerveGas goes above 0.36, whilst at the same time, alcohol goes above 0.72 or formaldehyde goes above 0.39, decrease BetaBlocker by 0.02
	- When methanol goes above 0.67, or on the other hand, lead dips below 0.62 and chlorine goes above 0.6, raise BetaBlocker by 0.02
	- When chlorine dips below 0.74 or sarin dips below 0.36, whilst at the same time, lead dips below 0.68, try decreasing glucagon by 0.04
	- If formaldehyde dips below 0.61 and methanol goes above 0.52, or on the other hand, nerveGas dips below 0.36 and cyanide dips below 0.64, try increasing glucagon by 0.01


Your conditional statements should consider the following poisons:

	- methanol
	- chlorine
	- nerveGas
	- cyanide
	- formaldehyde
	- alcohol
	- lead
	- sarin


Your conditional statements should modify the following antidotes:

	- SodiumBicarbonate
	- protamine
	- paracetamol
	- BetaBlocker
	- glucagon


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var methanol;
var chlorine;
var nerveGas;
var cyanide;
var formaldehyde;
var alcohol;
var lead;
var sarin;

//Declare the antidote variables
var SodiumBicarbonate;
var protamine;
var paracetamol;
var BetaBlocker;
var glucagon;

//This variable is used for drawing the graph
var graphs;

function setup() {
	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	chlorine = 0.5;
	nerveGas = 0.5;
	cyanide = 0.5;
	formaldehyde = 0.5;
	alcohol = 0.5;
	lead = 0.5;
	sarin = 0.5;
	SodiumBicarbonate = 0.5;
	protamine = 0.5;
	paracetamol = 0.5;
	BetaBlocker = 0.5;
	glucagon = 0.5;

	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 8; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}
}

function draw() {
	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - When chlorine goes above 0.28 or methanol goes above 0.61, whilst at the same time, sarin dips below 0.41, decrease SodiumBicarbonate by 0.04
	if ((chlorine > 0.28 || methanol > 0.61) && sarin < 0.41) {
		SodiumBicarbonate -= 0.04;
	}
	// - When either nerveGas dips below 0.46, formaldehyde goes above 0.68, cyaniide goes above 0.31, or perhaps alcohol dips below 0.66, increment SodiumBicarbonate by 0.03
	if (
		nerveGas < 0.46 ||
		formaldehyde > 0.68 ||
		cyanide > 0.31 ||
		alcohol < 0.66
	) {
		SodiumBicarbonate += 0.03;
	}
	// - When either sarin goes above 0.7, nerveGas goes above 0.6, or perhaps formaldehyde goes above 0.68, decrease protamine by 0.05
	if (sarin > 0.7 || nerveGas > 0.6 || formaldehyde > 0.68) {
		protamine -= 0.05;
	}
	// - If cyanide goes above 0.46, methanol dips below 0.35, and also alcohol goes above 0.47, increase protamine by 0.01
	if (cyanide > 0.46 && methanol < 0.35 && alcohol > 0.47) {
		protamine += 0.01;
	}
	// - When cyanide goes above 0.67 or methanol goes above 0.75, whilst at the same time, formaldehyde dips below 0.61 and lead goes above 0.54, reduce paracetamol by 0.03
	if (
		(cyanide > 0.67 || methanol > 0.75) &&
		(formaldehyde < 0.61 &&
			lead > 0.54)
	) {
		paracetamol -= 0.03;
	}
	// - If either alcohol dips below 0.26, chlorine dips below 0.41, or perhaps nerveGas dips below 0.75, increment paracetamol by 0.04
	if (alcohol < 0.26 || chlorine < 0.41 || nerveGas < 0.75) {
		paracetamol += 0.04;
	}
	// - If nerveGas goes above 0.36, whilst at the same time, alcohol goes above 0.72 or formaldehyde goes above 0.39, decrease BetaBlocker by 0.02
	if (nerveGas > 0.36 && (alcohol > 0.72 || formaldehyde > 0.39)) {
		BetaBlocker -= 0.02;
	}
	// - When methanol goes above 0.67, or on the other hand, lead dips below 0.62 and chlorine goes above 0.6, raise BetaBlocker by 0.02
	if (methanol > 0.67 || (lead < 0.62 && chlorine > 0.6)) {
		BetaBlocker += 0.02;
	}

	// - When chlorine dips below 0.74 or sarin dips below 0.36, whilst at the same time, lead dips below 0.68, try decreasing glucagon by 0.04
	if ((chlorine < 0.74 || sarin < 0.36) && lead < 0.68) {
		glucagon -= 0.04
	}
	// - If formaldehyde dips below 0.61 and methanol goes above 0.52, or on the other hand, nerveGas dips below 0.36 and cyanide dips below 0.64, try increasing glucagon by 0.01
	if ((formaldehyde < 0.61 && methanol > 0.52) || nerveGas < 0.36 && cyanide < 0.64) {
		glucagon += 0.01
	}
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		  For testing, you might want to temporarily comment out
		  these lines and set the same variables to constant values
		  instead.
	  */

	methanol = nextValue(graphs[0], methanol);
	chlorine = nextValue(graphs[1], chlorine);
	nerveGas = nextValue(graphs[2], nerveGas);
	cyanide = nextValue(graphs[3], cyanide);
	formaldehyde = nextValue(graphs[4], formaldehyde);
	alcohol = nextValue(graphs[5], alcohol);
	lead = nextValue(graphs[6], lead);
	sarin = nextValue(graphs[7], sarin);

	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	protamine = constrain(protamine, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	BetaBlocker = constrain(BetaBlocker, 0, 1);
	glucagon = constrain(glucagon, 0, 1);

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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0),
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text("methanol: " + nf(methanol, 1, 2), 20, 20);
	fill(colors[1]);
	text("chlorine: " + nf(chlorine, 1, 2), 20, 40);
	fill(colors[2]);
	text("nerveGas: " + nf(nerveGas, 1, 2), 20, 60);
	fill(colors[3]);
	text("cyanide: " + nf(cyanide, 1, 2), 20, 80);
	fill(colors[4]);
	text("formaldehyde: " + nf(formaldehyde, 1, 2), 20, 100);
	fill(colors[5]);
	text("alcohol: " + nf(alcohol, 1, 2), 20, 120);
	fill(colors[6]);
	text("lead: " + nf(lead, 1, 2), 20, 140);
	fill(colors[7]);
	text("sarin: " + nf(sarin, 1, 2), 20, 160);

	//draw the antidotes bar chart
	drawBar(SodiumBicarbonate, 50, "SodiumBicarbonate");
	drawBar(protamine, 200, "protamine");
	drawBar(paracetamol, 350, "paracetamol");
	drawBar(BetaBlocker, 500, "BetaBlocker");
	drawBar(glucagon, 650, "glucagon");
}

function nextValue(graph, val) {
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03, 0.03);

	val += delta;
	if (val > 1 || val < 0) {
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val);
	graph.shift();
	return val;
}

function drawGraph(graph) {
	//draws an array as a graph
	beginShape();
	for (var i = 0; i < graph.length; i++) {
		vertex((width * i) / 512, height * 0.5 - (graph[i] * height) / 3);
	}
	endShape();
}

function drawBar(val, x, name) {
	//draws the bars for bar chart
	noStroke();
	fill(0, 100, 100);
	var mh = height * 0.4 - 50;
	rect(x, height - 50 - val * mh, 100, val * mh);
	fill(255);
	text(name + ": " + val, x, height - 20);
}
