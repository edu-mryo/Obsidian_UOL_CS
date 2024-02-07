/*

Officer: 6174876
CaseNum: 502-1-29564170-6174876

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var CensoredA = [
  { Word0: "smile", Word1: "tug", Word2: "succeed" }, //0
  { Word0: "plug", Word1: "sail", Word2: "fence" }, //1
  { Word0: "sail", Word1: "radiate", Word2: "succeed" }, //2
  { Word0: "meddle", Word1: "smile", Word2: "mend" }, //3
  { Word0: "sneeze", Word1: "succeed", Word2: "plug" }, //4
  { Word0: "charge", Word1: "start", Word2: "tug" }, //5
  { Word0: "stuff", Word1: "plug", Word2: "play" }, //6
  { Word0: "Edsger", Word1: "clip", Word2: "COBOL" }, //7
  { Word0: "mend", Word1: "protect", Word2: "smile" }, //8
  { Word0: "hurry", Word1: "play", Word2: "Hopper’s" }, //9
];

var CensoredB = [
  { Word0: "capital", Word1: "protect", Word2: "Governor Zuckerberg" }, //0
  { Word0: "fence", Word1: "hurry", Word2: "succeed" }, //1
  { Word0: "mend", Word1: "she has", Word2: "bake" }, //2
  { Word0: "bake", Word1: "charge", Word2: "protect" }, //3
  { Word0: "mend", Word1: "charge", Word2: "protect" }, //4
  { Word0: "bake", Word1: "start", Word2: "rejoice" }, //5
  { Word0: "rejoice", Word1: "rejoice", Word2: "start" }, //6
  { Word0: "sail", Word1: "romantic", Word2: "syndicate" }, //7
  { Word0: "delicate", Word1: "bake", Word2: "meddle" }, //8
  { Word0: "a donation", Word1: "plug", Word2: "radiate" }, //9
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = `My dearest ${CensoredA[7].Word0} Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about ${CensoredA[9].Word2} intervention. I suspect that ${CensoredB[2].Word1} a ${CensoredB[7].Word1} interest at the ${CensoredA[7].Word2} I and the ${CensoredB[7].Word2} appreciate your many contributions over the years. However, this is a most ${CensoredB[8].Word0} matter which would require significant ${CensoredB[0].Word0} for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps ${CensoredB[9].Word0} to my forthcoming campaign would help. Yours sincerely,${CensoredB[0].Word2}`;
}

function draw() {
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width / 2, 10, width / 2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(
    "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg",
    670,
    100,
    580,
    600
  );
}
