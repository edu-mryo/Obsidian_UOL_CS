/*

Officer: 6174876
CaseNum: 701-1-50846457-6174876

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. I remember they had a dark black tattoo. I'm not quite sure. They had white hair. They wore thin metallic glasses. They were quite big, they probably weigh more than 62 Kg. I would say they were shorter than 185 cm. It's so hard to remember right now. Their expression seemed blank. That's all I know officer. 

*/

var suspectList = [
	{ 
		"name": "BRAD DAVISWOOD",
		"tattoo": "big arrow",
		"hair": "thick black",
		"expression": "menacing",
		"weight": 73,
		"height": 150
	},
	{ 
		"name": "ERMELINDA SILVEIRA",
		"tattoo": "ox",
		"hair": "long white",
		"expression": "empty",
		"weight": 69,
		"height": 178
	},
	{ 
		"name": "JESUS ZETLAND",
		"tattoo": "bull",
		"hair": "ginger",
		"expression": "depressed",
		"weight": 80,
		"height": 155
	},
	{ 
		"name": "DRUSILLA BROADVIEW",
		"tattoo": "dark black",
		"hair": "white",
		"expression": "blank",
		"weight": 68,
		"height": 175
	},
	{ 
		"name": "RANDEE MONKSFORD",
		"tattoo": "dragon",
		"hair": "shaved",
		"expression": "nerveous",
		"weight": 70,
		"height": 185
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

function testSuspect(suspectObj){
	// It all started when I was exiting the store. That's when I noticed them. I remember they had a dark black tattoo. I'm not quite sure. They had white hair. They wore thin metallic glasses.
	// They were quite big, they probably weigh more than 62 Kg. I would say they were shorter than 185 cm. It's so hard to remember right now. Their expression seemed blank. That's all I know officer. 
if(suspectObj.tattoo =="dark black" && suspectObj.hair =="white" && suspectObj.weight > 62 && suspectObj.height < 185 && suspectObj.expression == "blank"){
	return true
}

}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(testSuspect(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
