/*

Officer: 7360582
CaseNum: 202-3-29238577-7360582

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce yellow filled text with magenta outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

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
	createCanvas(539,500);
	textSize(28);
}

function draw()
{
	background(255);

	fill(255,165,0);
	stroke(0,0,255);
	textFont(Diggity);
	// text("cash.", 450,116);
	fill(0,255,255);
	stroke(255,0,255); //2
	textFont(Melissa);
	// text("Are", 7,146);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("should", 332,146);
	// text("?", 331,237);
	textFont(Melissa);
	// text("so,", 298,116);
	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Diggity);
	// text("contin", 305,84);
	pop();
	// text("more", 190,237);
	// text("sometimes.", 387,204);
	push();
	fill(255,165,0);
	textFont(RonsFont);
	// text("longer", 92,84);
	pop();
	stroke(0,0,0);
	// text("our", 410,174);
	fill(255,255,0); // 1
	stroke(255,0,255); //2
	textFont(Ballpointprint); // 3
	text("ignore", 169,84);
	text("for", 17,174);
	text("money", 156,116);
	push();
	stroke(0,255,0);
	textFont(RonsFont);
	// text("?", 166,204);
	pop();
	text("safe", 103,204);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Melissa);
	// text("can", 354,116);
	push();
	fill(255,192,203);
	textFont(Diggity);
	// text("Bob,", 129,28);
	pop();
	textFont(Ballpointprint); // 3
	// text("The", 351,237);
	fill(255,255,0); // 1
	textFont(Melissa);
	// text("so", 279,204);
	fill(0,255,255);
	stroke(255,0,255); //2
	textFont(Ballpointprint); // 3
	// text("away", 451,146);
	fill(255,192,203);
	textFont(Melissa);
	// text("I'm", 479,204);
	// text("not", 8,237);
	fill(255,255,0); // 1
	stroke(0,255,0);
	// text("Are", 448,84);
	fill(255,192,203);
	stroke(255,0,255); //2
	textFont(Diggity);
	// text("se", 274,84);
	fill(255,255,0); // 1
	stroke(0,0,0);
	textFont(Melissa);
	// text("take", 290,237);
	// text("d", 390,84);
	textFont(Diggity);
	// text("rever", 34,322);
	// text("short", 66,116);
	fill(255,165,0);
	stroke(255,0,255); //2
	// text("I", 12,84);
	push();
	textFont(RonsFont);
	// text("we", 291,146);
	pop();
	// text("sort", 198,174);
	// text("avoiding", 73,146);
	push();
	fill(255,192,203);
	textFont(Ballpointprint); // 3
	// text("darling", 49,28);
	pop();
	stroke(0,0,0);
	// text("I", 234,237);
	stroke(255,0,0);
	textFont(Ballpointprint); // 3
	// text("silence.", 60,266);
	fill(0,255,255);
	textFont(RonsFont);
	// text("I", 329,116);
	stroke(0,255,0);
	textFont(Ballpointprint); // 3
	// text("sure", 40,237);
	fill(255,192,203);
	textFont(RonsFont);
	// text("Is", 373,174);
	fill(255,255,0); // 1
	textFont(Ballpointprint); // 3
	// text("and", 149,174);
	textFont(Diggity);
	// text("ual", 355,84);
	fill(255,192,203);
	stroke(0,0,255);
	textFont(Melissa);
	// text("much", 145,237);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(RonsFont);
	// text("how", 95,237);
	// text("break", 77,174);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Ballpointprint); // 3
	// text("no", 59,84);
	push();
	fill(255,255,0); // 1
	stroke(0,0,255);
	// text("x", 59,378);
	pop();
	stroke(255,0,255); //2
	textFont(Diggity);
	// text("secrets,", 412,237);
	push();
	fill(255,255,0); // 1
	// text("this", 247,174);
	pop();
	stroke(0,0,0);
	textFont(RonsFont);
	// text("yours,", 94,322);
	// text("My", 7,28);
	fill(255,255,0); // 1
	textFont(Diggity);
	// text("guarded", 305,204);
	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(RonsFont);
	// text("?", 230,116);
	pop();
	stroke(255,0,255); //2
	// text("can", 248,237);
	// text("?", 191,146);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Ballpointprint); // 3
	// text("all", 291,174);
	fill(0,255,255);
	textFont(Melissa);
	// text("nship", 56,204);
	textFont(Diggity);
	// text("of", 125,116);
	push();
	textFont(Ballpointprint); // 3
	// text("If", 250,116);
	pop();
	fill(255,192,203);
	// text("the", 244,84);
	textFont(Ballpointprint); // 3
	// text("send", 387,116);
	textFont(Melissa);
	// text("you", 41,146);
	// text("elays.", 399,84);
	fill(255,255,0); // 1
	stroke(255,0,255); //2
	textFont(Ballpointprint); // 3
	text("go", 415,146);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Diggity);
	// text("Perhaps", 213,146);
	push();
	fill(255,255,0); // 1
	// text("You", 186,204);
	pop();
	textFont(Ballpointprint); // 3
	// text("you", 22,116);
	fill(255,255,0); // 1
	textFont(RonsFont);
	// text("are", 229,204);
	textFont(Melissa);
	// text("relatio", 9,204);
	textFont(RonsFont);
	// text("out.", 324,174);
	stroke(255,0,255); //2
	textFont(Diggity);
	// text("the", 18,266);
	push();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Melissa);
	// text("a", 61,174);
	// text("can", 26,84);
	// text("Daisy", 10,378);
	pop();
	textFont(RonsFont);
	// text("me", 149,146);
	push();
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Diggity);
	// text("Fo", 15,322);
	pop();



}
