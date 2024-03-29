/*

Officer: 6174876
CaseNum: 701-0-20641221-6174876

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist randee tintle and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They had dark brown hair. I'll never forget their blue eyes. Their expression seemed blank. It's hard to say. It's hard to say. I hope I never have to go through that again. 

*/

var lineupLog = [
	{ 
		"name": "JAUNITA PORTOS",
		"expression": "blank",
		"hair": "dark brown",
		"eyes": "blue"
	},
	{ 
		"name": "PIERRE SYMMES",
		"expression": "menacing",
		"hair": "ginger",
		"eyes": "green"
	},
	{ 
		"name": "KITTY ASHELY",
		"expression": "empty",
		"hair": "short black",
		"eyes": "green"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function checkSuspect(suspectObj){
	if (suspectObj.hair == "dark brown" && suspectObj.eyes =="blue" && suspectObj.expression =="blank" ){
		return true
	};
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(checkSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
