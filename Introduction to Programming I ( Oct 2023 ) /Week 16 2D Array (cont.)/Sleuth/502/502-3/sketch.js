/*

Officer: 6174876
CaseNum: 502-2-45164120-6174876

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var paperA = {
	part0: [ "sneeze", "protect", "sail"], 
	part1: [ "fence", "syndicate", "start"], 
	part2: [ "a donation", "play", "meddle"], 
	part3: [ "bake", "plug", "meddle"], 
	part4: [ "bake", "play", "play"], 
	part5: [ "ALGOL", "plug", "protect"], 
	part6: [ "fence", "smile", "Governor Zuckerberg"], 
	part7: [ "Hopper", "rejoice", "sneeze"], 
	part8: [ "succeed", "plug", "$200,000"], 
	part9: [ "rejoice", "mend", "sneeze"]
};

var paperB = {
	part0: [ "stuff", "stuff", "bake"], 
	part1: [ "sail", "consider", "radiate"], 
	part2: [ "rejoice", "sneeze", "start"], 
	part3: [ "charge", "protect", "start"], 
	part4: [ "start", "protect", "Edsger"], 
	part5: [ "stuff", "meddle", "hit"], 
	part6: [ "protect", "fence", "consider"], 
	part7: [ "play", "plug", "protect"], 
	part8: [ "meddle", "campaign", "radiate"], 
	part9: [ "fence", "stuff", "succeed"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `Dear ${paperA.part6[2]}, I am sure that something could be worked out in terms of ${paperA.part2[0]} for your ${paperB.part8[1]} How does ${paperA.part8[2]} sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. ${paperA.part7[0]} needs to be out of the picture. She’s caused enough trouble. Get the ${paperA.part1[1]} to organise the ${paperB.part5[2]} but I’d prefer it you don’t mention me or ${paperA.part5[0]} I owe them enough favours already. Your old friend, ${paperB.part4[2]}`

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
