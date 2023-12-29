/*

Officer: 6174876
CaseNum: 202-3-50263484-6174876

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Violet Red filled text with a Light Sea Green outline in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

//fill rgb medium violet red 199,21,133
//stroke rgb light sea green 32,178,170
//font RonsFont

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(699,526);
	textSize(32);
}

function draw()
{
	background(255);

	push();
	fill(210,105,30);
	stroke(255,165,0);
	textFont(RonsFont); //RonsFont
	// text("and", 96,134);
	pop();
	fill(123,104,238);
	stroke(0,0,139);
	textFont(RonsFont); //RonsFont
	// text("this", 212,134);
	push();
	fill(255,69,0);
	stroke(0,100,0);
	textFont(Diggity);
	// text("x", 68,394);
	pop();
	fill(218,165,32);
	stroke(0,128,128);
	textFont(Ballpointprint);
	// text("cash.", 515,167);
	fill(0,255,127);
	stroke(139,0,0);
	textFont(RonsFont); //RonsFont
	// text("so", 11,266);
	fill(244,164,96);
	stroke(25,25,112);
	// text("continual", 278,199);
	fill(219,112,147);
	stroke(124,252,0);
	textFont(Ballpointprint);
	// text("?", 271,96);
	fill(34,139,34);
	stroke(0,191,255);
	// text("?", 629,134);
	push();
	fill(0,0,205);
	// text("send", 443,167);
	pop();
	fill(72,209,204);
	textFont(RonsFont); //RonsFont
	// text("a", 649,96);
	fill(238,130,238);
	stroke(160,82,45);
	textFont(Ballpointprint);
	// text("rets,", 392,233);
	fill(0,100,0);
	stroke(0,128,0);
	textFont(Melissa);
	// text("more", 95,233);
	push();
	fill(0,250,154);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("sec", 355,233);
	// text("go", 498,96);
	pop();
	stroke(160,82,45);
	textFont(RonsFont); //RonsFont
	// text("so,", 347,167);
	fill(0,0,139);
	stroke(128,0,128);
	textFont(Melissa);
	// text("can", 163,233);
	push();
	fill(138,43,226);
	stroke(255,165,0);
	// text("sometimes.", 176,266);
	pop();
	stroke(210,105,30);
	textFont(Diggity);
	// text("e.", 557,233);
	fill(173,255,47);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("darling", 54,32);
	fill(0,0,128);
	stroke(165,42,42);
	// text("I", 584,167);
	fill(124,252,0);
	stroke(210,105,30);
	// text("ignore", 119,199);
	fill(0,0,205);
	textFont(Diggity);
	// text("longer", 51,199);
	fill(0,128,0);
	stroke(32,178,170); //light sea green 
	// text("?", 281,167);
	fill(165,42,42);
	stroke(0,128,128);
	textFont(Ballpointprint);
	// text("we", 387,96);
	fill(0,100,0);
	stroke(148,0,211);
	textFont(RonsFont); //RonsFont
	// text("away", 539,96);
	push();
	fill(233,150,122);
	textFont(Melissa);
	// text("I", 389,167);
	pop();
	textFont(Melissa);
	// text("Daisy", 13,394);
	fill(255,140,0);
	stroke(218,165,32);
	textFont(RonsFont); //RonsFont
	// text("no", 12,199);
	fill(128,128,0);
	stroke(255,140,0);
	textFont(Melissa);
	// text("I", 146,233);
	fill(100,149,237);
	stroke(148,0,211);
	textFont(RonsFont); //RonsFont
	// text("our", 395,134);
	fill(128,0,0);
	stroke(0,139,139);
	// text("If", 305,167);
	fill(72,209,204);
	stroke(0,0,139);
	// text("you", 71,167);
	fill(144,238,144);
	stroke(218,165,32);
	// text("ed", 133,266);
	fill(107,142,35);
	stroke(160,82,45);
	textFont(Diggity);
	// text("yours,", 82,330);
	push();
	fill(219,112,147);
	stroke(127,255,0);
	// text("of", 183,167);
	pop();
	fill(153,50,204);
	stroke(220,20,60);
	textFont(RonsFont); //RonsFont
	// text("out.", 299,134);
	fill(128,0,128);
	stroke(0,0,255);
	textFont(Melissa);
	// text("delays.", 404,199);
	fill(50,205,50);
	stroke(148,0,211);
	textFont(Diggity);
	// text("silenc", 509,233);
	push();
	fill(0,255,127);
	stroke(50,205,50);
	// text("how", 588,199);
	pop();
	fill(184,134,11);
	textFont(RonsFont); //RonsFont
	// text("The", 307,233);
	fill(153,50,204);
	stroke(0,250,154);
	textFont(Melissa);
	// text("can", 623,167);
	fill(240,128,128);
	stroke(255,255,0);
	textFont(Ballpointprint);
	// text("much", 27,233);
	push();
	fill(255,99,71);
	stroke(154,205,50);
	textFont(RonsFont); //RonsFont
	// text("Are", 13,167);
	pop();
	stroke(255,140,0);
	textFont(Melissa);
	// text("are", 641,233);
	push();
	fill(139,69,19);
	stroke(107,142,35);
	// text("ld", 476,96);
	pop();
	fill(255,215,0);
	// text("not", 506,199);
	push();
	fill(244,164,96);
	stroke(178,34,34);
	textFont(Diggity);
	// text("Are", 13,96);
	pop();
	fill(128,0,128);
	stroke(255,255,0);
	textFont(RonsFont); //RonsFont
	// text("Is", 354,134);
	fill(233,150,122);
	stroke(199,21,133);
	// text("these", 204,199);
	fill(144,238,144);
	stroke(32,178,170); //light sea green 
	// text("You", 585,233);
	fill(32,178,170);
	stroke(0,0,255);
	textFont(Melissa);
	// text("money", 219,167);
	fill(199,21,133);   //medium violet red
	stroke(32,178,170); //light sea green 
	textFont(RonsFont); //RonsFont
	text("guard", 48,266);
	fill(218,112,214);
	stroke(139,0,139);
	textFont(Melissa);
	// text("Forever", 8,330);
	fill(153,50,204);
	stroke(0,100,0);
	// text("sure", 543,199);
	fill(220,20,60);
	stroke(199,21,133);
	// text("relationship", 457,134);
	fill(138,43,226);
	stroke(178,34,34);
	textFont(RonsFont); //RonsFont
	// text("avoiding", 116,96);
	fill(147,112,219);
	stroke(255,215,0);
	textFont(Ballpointprint);
	// text("you", 65,96);
	fill(0,0,205);
	stroke(128,128,0);
	textFont(Melissa);
	// text("My", 18,32);
	fill(0,0,128);
	stroke(50,205,50);
	// text("shou", 437,96);
	fill(160,82,45);
	stroke(0,255,255);
	// text("I'm", 470,199);
	stroke(255,255,0);
	textFont(Diggity);
	// text("Bob,", 146,32);
	fill(199,21,133);   //medium violet red
	stroke(32,178,170); //light sea green 
	textFont(RonsFont); //RonsFont
	text("safe", 566,134);
	text("the", 458,233);
	text("take", 200,233);
	text("break", 14,134);
	fill(0,0,128);
	stroke(199,21,133);
	textFont(Melissa);
	// text("for", 613,96);
	push();
	fill(0,191,255);
	stroke(32,178,170); //light sea green 
	// text("can", 406,167);
	pop();
	fill(205,133,63);
	stroke(127,255,0);
	textFont(Diggity);
	// text("all", 269,134);
	fill(30,144,255);
	stroke(154,205,50);
	textFont(Melissa);
	// text("short", 126,167);
	fill(184,134,11);
	stroke(34,139,34);
	textFont(Ballpointprint);
	// text("sort", 159,134);
	fill(32,178,170);
	stroke(139,0,0);
	// text("?", 271,233);
	fill(30,144,255);
	stroke(46,139,87);
	textFont(RonsFont); //RonsFont
	// text("me", 223,96);
	fill(148,0,211);
	stroke(75,0,130);
	textFont(Melissa);
	// text("Perhaps", 307,96);



}
