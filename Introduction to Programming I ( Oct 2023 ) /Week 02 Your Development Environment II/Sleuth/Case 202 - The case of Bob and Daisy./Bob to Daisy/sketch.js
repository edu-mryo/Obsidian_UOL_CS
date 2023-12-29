/*

Officer: 6174876
CaseNum: 202-0-15818290-6174876

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Yellow Green text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

//rgb yellow green 154,205,50

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(530,652);
	textFont(letterFont);
	textSize(30);
}

function draw()
{
	background(255);

	fill(30,144,255);
	// text("face,", 20,156);
	// text("that", 179,121);
	fill(128,128,0);
	// text("since", 328,221);
	fill(176,224,230);
	// text("I", 470,190);
	fill(0,100,0);
	// text("eyes.", 102,288);
	fill(199,21,133);
	// text("I", 85,253);
	fill(0,128,0);
	// text("You", 17,90);
	// text("were", 122,190);
	fill(0,191,255);
	// text("of", 243,348);
	fill(139,0,0);
	// text("Daisy,", 140,30);
	// text("music", 177,348);
	fill(147,112,219);
	// text("last", 439,221);
	// text("true", 290,190);
	fill(244,164,96);
	// text("think", 223,253);
	fill(0,0,255);
	// text("your", 311,318);
	fill(25,25,112);
	// text("lo", 64,30);
	fill(139,0,139);
	// text("the", 22,348);
	fill(0,0,139);
	// text("the", 26,318);
	fill(165,42,42);
	// text("Bob", 17,536);
	fill(0,0,128);
	// text("I", 236,121);
	fill(154,205,50); //yellow green
	text("chosen", 76,416);
	text("April", 324,90);
	text("a", 76,221);
	text("first", 25,121);
	text("date", 18,253);
	fill(128,0,0);
	// text("you", 74,190);
	fill(0,100,0);
	// text("my", 121,90);
	fill(173,216,230);
	// text("kisses,", 137,476);
	// text("in", 474,288);
	fill(178,34,34);
	// text("It", 178,288);
	fill(0,250,154);
	// text("the", 453,90);
	// text("the", 284,348);
	// text("voice", 367,318);
	fill(127,255,212);
	// text("that", 152,318);
	fill(255,0,0);
	// text("Ever", 258,221);
	fill(240,230,140);
	// text("knew", 129,156);
	fill(0,250,154);
	// text("?", 224,221);
	fill(0,206,209);
	// text("moment", 89,121);
	fill(135,206,235);
	// text("our", 396,221);
	fill(173,255,47);
	// text("one", 238,190);
	fill(255,105,180);
	// text("hear", 246,318);
	// text("from", 198,156);
	fill(139,0,139);
	// text("few", 334,156);
	fill(0,191,255);
	// text("can", 122,253);
	// text("I", 209,318);
	// text("blessed", 76,348);
	fill(0,255,127);
	// text("when", 256,288);
	fill(176,224,230);
	// text("seconds", 396,156);
	// text("in", 290,90);
	fill(75,0,130);
	// text("I", 415,379);
	fill(210,105,30);
	// text("Oh", 17,30);
	fill(135,206,250);
	// text("those", 262,156);
	fill(255,215,0);
	// text("saw", 273,121);
	// text("are", 69,90);
	fill(222,184,135);
	// text("only", 169,253);
	fill(65,105,225);
	// text("From", 388,90);
	fill(0,139,139);
	// text("green", 21,288);
	fill(219,112,147);
	// text("of", 290,253);
	fill(233,150,122);
	// text("that", 358,379);
	fill(240,230,140);
	// text("the", 66,379);
	fill(240,128,128);
	// text("p", 212,379);
	fill(219,112,147);
	// text("harp.", 338,348);
	fill(240,128,128);
	// text("lovely", 380,121);
	// text("that", 17,190);
	fill(218,165,32);
	// text("confession", 104,221);
	// text("day", 234,90);
	// text("vely", 78,30);
	fill(154,205,50); //yellow green
	text("is", 223,288);
	fill(0,191,255);
	// text("be", 19,379);
	fill(152,251,152);
	// text("like", 436,318);
	fill(100,149,237);
	// text("and", 84,476);
	fill(0,0,255);
	// text("your", 324,121);
	fill(255,0,255);
	// text("alone", 406,288);
	fill(107,142,35);
	// text("must", 439,348);
	fill(123,104,238);
	// text("May", 411,190);
	fill(219,112,147);
	// text("make", 22,221);
	fill(173,255,47);
	// text("alive", 291,379);
	fill(220,20,60);
	// text("x", 75,536);
	fill(100,149,237);
	// text("I", 92,156);
	fill(205,133,63);
	// text("your", 331,253);
	// text("am", 452,379);
	fill(64,224,208);
	// text("darl", 387,253);
	fill(255,69,0);
	// text("I", 326,288);
	fill(148,0,211);
	// text("I", 402,348);
	// text("my", 193,190);
	fill(219,112,147);
	// text("erson", 222,379);
	fill(0,206,209);
	// text("luckiest", 120,379);
	fill(124,252,0);
	// text("love.", 348,190);
	fill(50,205,50);
	// text("quiet", 80,318);
	fill(0,206,209);
	// text("am", 363,288);
	fill(255,69,0);
	// text("your", 20,416);
	fill(32,178,170);
	// text("ing,", 426,253);
	fill(240,128,128);
	// text("sunny", 166,90);
	// text("Love", 17,476);



}
