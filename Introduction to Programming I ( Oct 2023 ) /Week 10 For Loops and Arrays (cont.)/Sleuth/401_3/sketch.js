/*

Officer: 6174876
CaseNum: 401-2-98295137-6174876

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If Amanita_Mushrooms goes above 0.72 or ricin goes above 0.59, whilst at the same time, insecticide dips below 0.27, reduce ethanol by 0.04
	- When either mercury dips below 0.61, alcohol dips below 0.56, or perhaps SpiderVenom dips below 0.75, raise ethanol by 0.05
	- If SpiderVenom goes above 0.43, Amanita_Mushrooms dips below 0.27, and also ricin goes above 0.43, decrease Sodium_Bicarbonate by 0.02
	- When either mercury dips below 0.74, alcohol goes above 0.46, or perhaps insecticide dips below 0.54, increase Sodium_Bicarbonate by 0.01
	- If alcohol goes above 0.58, or on the other hand, ricin goes above 0.6 and Amanita_Mushrooms dips below 0.39, reduce hydrochloric_acid by 0.03
	- If SpiderVenom dips below 0.58 and insecticide dips below 0.42, increment hydrochloric_acid by 0.03
	- When SpiderVenom dips below 0.34 or Amanita_Mushrooms dips below 0.43, decrement opioids by 0.01
	- When mercury dips below 0.5 or insecticide dips below 0.47, try increasing opioids by 0.03


Your conditional statements should consider the following poisons:

	- SpiderVenom
	- ricin
	- alcohol
	- mercury
	- insecticide
	- Amanita_Mushrooms


Your conditional statements should modify the following antidotes:

	- ethanol
	- Sodium_Bicarbonate
	- hydrochloric_acid
	- opioids


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
var SpiderVenom;
var ricin;
var alcohol;
var mercury;
var insecticide;
var Amanita_Mushrooms;


//Declare the antidote variables
var ethanol;
var Sodium_Bicarbonate;
var hydrochloric_acid;
var opioids;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	SpiderVenom = 0.5;
	ricin = 0.5;
	alcohol = 0.5;
	mercury = 0.5;
	insecticide = 0.5;
	Amanita_Mushrooms = 0.5;
	ethanol = 0.5;
	Sodium_Bicarbonate = 0.5;
	hydrochloric_acid = 0.5;
	opioids = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 6; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - If Amanita_Mushrooms goes above 0.72 or ricin goes above 0.59, whilst at the same time, insecticide dips below 0.27, reduce ethanol by 0.04
	if ((Amanita_Mushrooms > 0.72 || ricin > 0.59) && insecticide < 0.27) { ethanol -= 0.04 }
	// - When either mercury dips below 0.61, alcohol dips below 0.56, or perhaps SpiderVenom dips below 0.75, raise ethanol by 0.05
	if (mercury < 0.61 || alcohol < 0.56 || SpiderVenom < 0.75) { ethanol += 0.05 }
	// - If SpiderVenom goes above 0.43, Amanita_Mushrooms dips below 0.27, and also ricin goes above 0.43, decrease Sodium_Bicarbonate by 0.02
	if (SpiderVenom > 0.43 && Amanita_Mushrooms < 0.27 && ricin > 0.43) { Sodium_Bicarbonate -= 0.02 }
	// - When either mercury dips below 0.74, alcohol goes above 0.46, or perhaps insecticide dips below 0.54, increase Sodium_Bicarbonate by 0.01
	if (mercury < 0.74 || alcohol > 0.46 || insecticide < 0.54) { Sodium_Bicarbonate += 0.01 }
	// - If alcohol goes above 0.58, or on the other hand, ricin goes above 0.6 and Amanita_Mushrooms dips below 0.39, reduce hydrochloric_acid by 0.03
	if (alcohol > 0.58 || (ricin > 0.6 && Amanita_Mushrooms < 0.39)) { hydrochloric_acid -= 0.03 }
	// - If SpiderVenom dips below 0.58 and insecticide dips below 0.42, increment hydrochloric_acid by 0.03
	if (SpiderVenom < 0.58 && insecticide < 0.42) { hydrochloric_acid += 0.03 }
	// - When SpiderVenom dips below 0.34 or Amanita_Mushrooms dips below 0.43, decrement opioids by 0.01
	if (SpiderVenom < 0.34 || Amanita_Mushrooms < 0.43) { opioids -= 0.01 }
	// - When mercury dips below 0.5 or insecticide dips below 0.47, try increasing opioids by 0.03
	if (mercury < 0.5 || insecticide < 0.47) { opioids += 0.03 }






	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	SpiderVenom = nextValue(graphs[0], SpiderVenom);
	ricin = nextValue(graphs[1], ricin);
	alcohol = nextValue(graphs[2], alcohol);
	mercury = nextValue(graphs[3], mercury);
	insecticide = nextValue(graphs[4], insecticide);
	Amanita_Mushrooms = nextValue(graphs[5], Amanita_Mushrooms);


	ethanol = constrain(ethanol, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	opioids = constrain(opioids, 0, 1);


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
	text('SpiderVenom: ' + nf(SpiderVenom, 1, 2), 20, 20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin, 1, 2), 20, 40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol, 1, 2), 20, 60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury, 1, 2), 20, 80);
	fill(colors[4]);
	text('insecticide: ' + nf(insecticide, 1, 2), 20, 100);
	fill(colors[5]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms, 1, 2), 20, 120);


	//draw the antidotes bar chart
	drawBar(ethanol, 50, 'ethanol');
	drawBar(Sodium_Bicarbonate, 200, 'Sodium_Bicarbonate');
	drawBar(hydrochloric_acid, 350, 'hydrochloric_acid');
	drawBar(opioids, 500, 'opioids');


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
