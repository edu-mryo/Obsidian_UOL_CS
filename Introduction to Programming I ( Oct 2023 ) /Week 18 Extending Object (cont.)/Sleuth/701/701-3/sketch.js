/*

Officer: 6174876
CaseNum: 701-2-63494443-6174876

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from pierre silveira. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They brobably weigh between 69 and 83 kg. I'll never forget their grey eyes. They seemed to be between the age of 32 and 42 years old. It's hard to say. They had no hair. Their expression seemed menacing. The person I saw was male. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. It's hard to say. They were fairly tall, I think between a height of 155 and 190 cm. That's all I know officer. 

*/

var suspectList = [
  {
    name: "RANDEE DEAUVILLE",
    expression: "depressed",
    hair: "red",
    gender: "male",
    eyes: "green",
    weight: 69,
    height: 180,
    age: 33,
  },
  {
    name: "ERMELINDA JACQUELIN",
    expression: "menacing",
    hair: "no",
    gender: "male",
    eyes: "grey",
    weight: 81,
    height: 157,
    age: 40,
  },
  {
    name: "NICOLE WILLMAR",
    expression: "nerveous",
    hair: "ginger",
    gender: "male",
    eyes: "grey",
    weight: 78,
    height: 170,
    age: 42,
  },
  {
    name: "DARBY PEGORD",
    expression: "sad",
    hair: "thin blond",
    gender: "female",
    eyes: "pale",
    weight: 76,
    height: 182,
    age: 35,
  },
  {
    name: "MALINDA TINTLE",
    expression: "blank",
    hair: "long white",
    gender: "male",
    eyes: "black",
    weight: 69,
    height: 188,
    age: 54,
  },
  {
    name: "LESLEY PORTOS",
    expression: "confused",
    hair: "white",
    gender: "female",
    eyes: "brown",
    weight: 70,
    height: 173,
    age: 29,
  },
  {
    name: "HANG CROME",
    expression: "menacing",
    hair: "dark brown",
    gender: "female",
    eyes: "blue",
    weight: 95,
    height: 176,
    age: 53,
  },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(640, 480);
  textFont(myFont);
}

// Declare your function here

function checkSuspectTraits(suspectObj) {
  //They brobably weigh between 69 and 83 kg.
  //I'll never forget their grey eyes.
  //They seemed to be between the age of 32 and 42 years old.
  //It's hard to say. They had no hair.
  //Their expression seemed menacing. The person I saw was male.
  //I distinctly remember that they were wearing a orange socks,
  //I remember thinking that was quite unusual.
  //It's hard to say. They were fairly tall, I think between a height of 155 and 190 cm. That's all I know officer.
  var count = 0;
  if (suspectObj.weight >= 69 && suspectObj.weight <= 83) {
    count += 1;
  }
  if (suspectObj.eyes == "grey") {
    count += 1;
  }
  if (suspectObj.hair == "no") {
    count += 1;
  }
  if (suspectObj.expression == "menacing") {
    count += 1;
  }
  if (suspectObj.height >= 155 && suspectObj.height <= 190) {
    count += 1;
  }
  if (suspectObj.age >= 32 && suspectObj.age <= 42) {
    count += 1;
  } if(suspectObj.gender =='male'){
	count+=1;
  }
  return count;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < suspectList.length; i++) {
    let matchingProperties = checkSuspectTraits(suspectList[i]);
    fill(50 * matchingProperties, 250 - 50 * matchingProperties, 0);
    text(
      "found " +
        matchingProperties +
        " matching properties for " +
        suspectList[i].name,
      60,
      60 + i * 20
    );
  }
}
