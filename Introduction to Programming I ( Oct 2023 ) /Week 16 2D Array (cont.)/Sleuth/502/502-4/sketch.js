/*

Officer: 6174876
CaseNum: 502-3-44647061-6174876

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var archiveA = [
{
	redactedWord0: {fragment0: "start", fragment1: "stuff", fragment2: "play", fragment3: "clip"}, 
	redactedWord1: {fragment0: "meddle", fragment1: "Governor Zuckerberg", fragment2: "start", fragment3: "sail"}, 
	redactedWord2: {fragment0: "plug", fragment1: "sail", fragment2: "smile", fragment3: "protect"}
},
{
	redactedWord0: {fragment0: "hurry", fragment1: "start", fragment2: "fence", fragment3: "start"}, 
	redactedWord1: {fragment0: "consider", fragment1: "clip", fragment2: "development", fragment3: "smile"}, 
	redactedWord2: {fragment0: "clip", fragment1: "smile", fragment2: "charge", fragment3: "hurry"}
},
{
	redactedWord0: {fragment0: "protect", fragment1: "bake", fragment2: "sail", fragment3: "start"}, 
	redactedWord1: {fragment0: "clip", fragment1: "mend", fragment2: "tug", fragment3: "charge"}, 
	redactedWord2: {fragment0: "rejoice", fragment1: "start", fragment2: "protect", fragment3: "meddle"}
},
{
	redactedWord0: {fragment0: "play", fragment1: "tug", fragment2: "bake", fragment3: "protect"}, 
	redactedWord1: {fragment0: "start", fragment1: "play", fragment2: "sneeze", fragment3: "clip"}, 
	redactedWord2: {fragment0: "charge", fragment1: "sail", fragment2: "stuff", fragment3: "charge"}
},
{
	redactedWord0: {fragment0: "sneeze", fragment1: "hurry", fragment2: "consider", fragment3: "Edsger"}, 
	redactedWord1: {fragment0: "charge", fragment1: "fence", fragment2: "fence", fragment3: "smile"}, 
	redactedWord2: {fragment0: "start", fragment1: "COBOL", fragment2: "rejoice", fragment3: "bake"}
}];

var archiveB = [
{
	redactedWord0: {fragment0: "start", fragment1: "mend", fragment2: "smile", fragment3: "bake"}, 
	redactedWord1: {fragment0: "succeed", fragment1: "meddle", fragment2: "hurry", fragment3: "ALGOL"}, 
	redactedWord2: {fragment0: "fence", fragment1: "sneeze", fragment2: "sneeze", fragment3: "sail"}
},
{
	redactedWord0: {fragment0: "stuff", fragment1: "you", fragment2: "clip", fragment3: "hurry"}, 
	redactedWord1: {fragment0: "meddle", fragment1: "donation", fragment2: "consider", fragment3: "hurry"}, 
	redactedWord2: {fragment0: "sneeze", fragment1: "sail", fragment2: "protect", fragment3: "start"}
},
{
	redactedWord0: {fragment0: "plug", fragment1: "play", fragment2: "clip", fragment3: "sneeze"}, 
	redactedWord1: {fragment0: "start", fragment1: "charge", fragment2: "succeed", fragment3: "syndicate"}, 
	redactedWord2: {fragment0: "start", fragment1: "radiate", fragment2: "$200,000", fragment3: "start"}
},
{
	redactedWord0: {fragment0: "smile", fragment1: "succeed", fragment2: "bake", fragment3: "charge"}, 
	redactedWord1: {fragment0: "sail", fragment1: "rejoice", fragment2: "consider", fragment3: "tug"}, 
	redactedWord2: {fragment0: "sneeze", fragment1: "mend", fragment2: "ALGOL fish wholesalers", fragment3: "start"}
},
{
	redactedWord0: {fragment0: "radiate", fragment1: "sail", fragment2: "meddle", fragment3: "bake"}, 
	redactedWord1: {fragment0: "stuff", fragment1: "bake", fragment2: "consider", fragment3: "rejoice"}, 
	redactedWord2: {fragment0: "smile", fragment1: "protect", fragment2: "sneeze", fragment3: "plug"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `My dearest ${archiveA[4].redactedWord0.fragment3} I have just received your very generous ${archiveB[1].redactedWord1.fragment1} of ${archiveB[2].redactedWord2.fragment2} Thank you. This will be invaluable to our campaign. ${archiveB[0].redactedWord1.fragment3} is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of ${archiveB[1].redactedWord0.fragment1} or ${archiveB[3].redactedWord2.fragment2} to the ${archiveB[2].redactedWord1.fragment3} Your new ${archiveA[1].redactedWord1.fragment2} at the ${archiveA[4].redactedWord2.fragment1} can now proceed without impediment. Yours sincerely, ${archiveA[0].redactedWord1.fragment1}`;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
