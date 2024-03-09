/*

Officer: 6174876
CaseNum: 701-3-55727610-6174876

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nelson silveira.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They were carrying a brown paper bag. It's so hard to remember right now. They seemed to be between the age of 38 and 72 years old. They had shaved hair. Their expression seemed nerveous. It's so hard to remember right now. It's so hard to remember right now. They were fairly tall, I think between a height of 160 and 210 cm. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. They brobably weigh between 62 and 77 kg. They wore black glasses. I'll never forget their blue eyes. I hope I never have to go through that again. 

*/

var usualSuspects = [
	{ 
		"name": "BRAD MYRLE",
		"hair": "long white",
		"item": "fur vest",
		"expression": "empty",
		"glasses": "red",
		"age": 25,
		"height": 175,
		"weight": 71
	},
	{ 
		"name": "MAJORIE NIEMELA",
		"hair": "shaved",
		"item": "dotted necktie",
		"expression": "nerveous",
		"glasses": "black",
		"age": 57,
		"height": 184,
		"weight": 71
	},
	{ 
		"name": "RANDEE PHINNEY",
		"hair": "thin blond",
		"item": "orange socks",
		"expression": "sad",
		"glasses": "thin metallic",
		"age": 37,
		"height": 180,
		"weight": 75
	},
	{ 
		"name": "LINETTE DURANTS",
		"hair": "short black",
		"item": "pair of leather trousers",
		"expression": "nerveous",
		"glasses": "very thick",
		"age": 41,
		"height": 175,
		"weight": 79
	},
	{ 
		"name": "LESLEY DORCEY",
		"hair": "no",
		"item": "purple hat",
		"expression": "confused",
		"glasses": "blue",
		"age": 21,
		"height": 194,
		"weight": 74
	},
	{ 
		"name": "DARBY PEGORD",
		"hair": "dark brown",
		"item": "red necktie",
		"expression": "depressed",
		"glasses": "light tan",
		"age": 44,
		"height": 157,
		"weight": 59
	},
	{ 
		"name": "SUMMER JENI",
		"hair": "ginger",
		"item": "net weave shirt",
		"expression": "blank",
		"glasses": "white",
		"age": 36,
		"height": 161,
		"weight": 72
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

// Declare both your functions here
 function checkSuspect(suspectObj){
	//I remember walking down the street and then I saw them.
	// They were carrying a brown paper bag. 
	//They seemed to be between the age of 38 and 72 years old. 
	//They had shaved hair. 
	//Their expression seemed nerveous. 
	//They were fairly tall, I think between a height of 160 and 210 cm. 
	//I distinctly remember that they were wearing a dotted necktie, 
	//They brobably weigh between 62 and 77 kg.
	//They wore black glasses. 
	//I'll never forget their blue eyes. 

	
}
 function getSuspectMatch(){}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
