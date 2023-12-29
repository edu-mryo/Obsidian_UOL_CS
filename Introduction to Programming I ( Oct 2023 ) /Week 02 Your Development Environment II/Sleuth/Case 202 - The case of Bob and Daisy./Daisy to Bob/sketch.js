/*

Officer: 6174876
CaseNum: 202-1-67370452-6174876

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Green filled text with a Forest Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

//rgb light green 144,238,144
//rgb forest green 34,139,34

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(614,524);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(233,150,122);
	stroke(0,0,205);
	// text("it", 562,96);
	fill(139,0,0);
	stroke(0,191,255);
	// text("ince", 19,136);
	fill(255,140,0);
	stroke(255,0,255);
	// text("longing", 53,278);
	fill(106,90,205);
	stroke(255,165,0);
	// text("?", 401,278);
	fill(165,42,42);
	stroke(0,128,128);
	// text("my", 449,208);
	fill(127,255,212);
	stroke(255,69,0);
	// text("around", 214,96);
	fill(148,0,211);
	stroke(0,191,255);
	// text("think", 265,168);
	fill(0,0,205);
	stroke(139,0,0);
	// text("and", 174,168);
	fill(220,20,60);
	stroke(32,178,170);
	// text("again", 350,278);
	fill(0,0,128);
	stroke(124,252,0);
	// text("we", 229,278);
	fill(222,184,135);
	stroke(160,82,45);
	// text("miss", 68,96);
	fill(218,112,214);
	stroke(75,0,130);
	// text("w", 311,208);
	fill(152,251,152);
	stroke(255,215,0);
	// text("stare", 510,136);
	fill(244,164,96);
	stroke(199,21,133);
	// text("darling", 44,32);
	fill(255,140,0);
	stroke(0,100,0);
	// text("sp", 244,208);
	fill(0,206,209);
	stroke(124,252,0);
	// text("on", 529,168);
	fill(128,128,0);
	stroke(0,206,209);
	// text("Bob,", 107,32);
	fill(219,112,147);
	stroke(0,0,255);
	// text("How", 253,244);
	fill(138,43,226);
	stroke(32,178,170);
	// text("ring,", 266,208);
	fill(144,238,144); // light green
	stroke(34,139,34); // forest green
	text("up", 567,136);
	text("side", 482,208);
	text("small", 11,244);
	fill(0,250,154);
	// text("desolate.", 167,244);
	fill(65,105,225);
	stroke(218,165,32);
	// text("we", 60,136);
	fill(0,0,255);
	stroke(154,205,50);
	// text("s", 8,136);
	stroke(139,0,0);
	// text("sky,", 129,168);
	fill(127,255,0);
	stroke(255,255,0);
	// text("at", 421,208);
	fill(218,165,32);
	stroke(127,255,0);
	// text("return.", 72,208);
	fill(0,0,255);
	stroke(220,20,60);
	// text("?", 117,278);
	fill(34,139,34);
	stroke(255,140,0);
	// text("can", 228,168);
	fill(0,128,128);
	stroke(0,139,139);
	// text("many", 414,96);
	fill(244,164,96);
	stroke(0,0,255);
	// text("last", 95,136);
	fill(0,255,127);
	stroke(127,255,0);
	// text("banking", 460,168);
	fill(184,134,11);
	stroke(0,0,128);
	// text("ithout", 325,208);
	fill(34,139,34);
	stroke(75,0,130);
	// text("in", 384,136);
	fill(240,230,140);
	stroke(128,0,0);
	// text("in", 185,208);
	fill(160,82,45);
	stroke(0,0,139);
	// text("kissed", 138,136);
	fill(218,165,32);
	stroke(0,0,205);
	// text("my", 405,136);
	fill(50,205,50);
	stroke(154,205,50);
	// text("place.", 315,96);
	fill(199,21,133);
	stroke(0,128,0);
	// text("the", 40,168);
	fill(139,0,0);
	stroke(0,255,127);
	// text("I", 220,136);
	fill(255,105,180);
	stroke(178,34,34);
	// text("united", 291,278);
	fill(255,99,71);
	stroke(255,140,0);
	// text("you", 385,208);
	fill(238,130,238);
	stroke(0,0,205);
	// text("yours,", 82,342);
	fill(153,50,204);
	stroke(0,206,209);
	// text("x", 63,406);
	fill(255,140,0);
	stroke(0,0,255);
	// text("When", 135,278);
	fill(255,105,180);
	stroke(32,178,170);
	// text("long", 237,136);
	fill(173,255,47);
	stroke(139,69,19);
	// text("arms.", 438,136);
	fill(0,128,0);
	stroke(184,134,11);
	// text("How", 371,96);
	fill(0,255,255);
	stroke(0,0,139);
	// text("the", 277,96);
	stroke(34,139,34); // forest green
	// text("you", 178,96);
	fill(127,255,0);
	stroke(50,205,50);
	// text("be", 264,278);
	fill(222,184,135);
	stroke(124,252,0);
	// text("is", 539,96);
	fill(127,255,212);
	stroke(46,139,87);
	// text("I'm", 424,168);
	fill(238,232,170);
	stroke(0,100,0);
	// text("only", 316,168);
	fill(144,238,144); // light green
	stroke(34,139,34); // forest green
	text("swift", 11,208);
	fill(123,104,238);
	stroke(153,50,204);
	// text("have", 451,244);
	fill(205,133,63);
	stroke(124,252,0);
	// text("Daisy", 8,406);
	fill(255,99,71);
	stroke(255,215,0);
	// text("I", 493,136);
	fill(160,82,45);
	stroke(184,134,11);
	// text("I", 211,168);
	fill(218,165,32);
	stroke(220,20,60);
	// text("I", 434,244);
	fill(0,128,0);
	stroke(165,42,42);
	// text("?", 202,136);
	fill(238,130,238);
	stroke(75,0,130);
	// text("you.", 385,168);
	fill(255,0,255);
	stroke(32,178,170);
	// text("Even", 136,208);
	fill(124,252,0);
	stroke(255,165,0);
	// text("months", 466,96);
	fill(147,112,219);
	stroke(148,0,211);
	// text("My", 8,32);
	fill(135,206,235);
	stroke(199,21,133);
	// text("do", 406,244);
	fill(123,104,238);
	stroke(210,105,30);
	// text("the", 206,208);
	fill(255,127,80);
	stroke(128,0,128);
	// text("having", 117,96);
	fill(233,150,122);
	stroke(75,0,130);
	// text("this", 10,278);
	fill(144,238,144); // light green
	stroke(34,139,34); // forest green
	text("at", 12,168);
	text("town", 63,244);
	text("store", 527,244);
	fill(50,205,50);
	stroke(255,255,0);
	// text("longer", 347,244);
	fill(205,133,63);
	stroke(0,100,0);
	// text("to", 278,136);
	fill(144,238,144); // light green
	stroke(34,139,34); // forest green
	text("hold", 306,136);
	fill(173,216,230);
	stroke(255,0,0);
	// text("I", 51,96);
	fill(173,255,47);
	stroke(124,252,0);
	// text("ight", 87,168);
	fill(75,0,130);
	stroke(0,128,128);
	// text("will", 191,278);
	fill(65,105,225);
	stroke(0,0,139);
	// text("n", 78,168);
	fill(0,128,128);
	stroke(50,205,50);
	// text("this", 525,208);
	fill(186,85,211);
	// text("much", 296,244);
	fill(255,0,255);
	stroke(128,128,0);
	// text("to", 499,244);
	fill(255,140,0);
	stroke(210,105,30);
	// text("Forever", 8,342);
	fill(255,0,0);
	stroke(255,140,0);
	// text("feels", 114,244);
	fill(173,255,47);
	stroke(218,165,32);
	// text("your", 556,168);
	fill(210,105,30);
	stroke(75,0,130);
	// text("of", 357,168);
	fill(205,133,63);
	stroke(46,139,87);
	// text("you", 348,136);
	fill(0,0,139);
	stroke(0,206,209);
	// text("How", 8,96);



}
