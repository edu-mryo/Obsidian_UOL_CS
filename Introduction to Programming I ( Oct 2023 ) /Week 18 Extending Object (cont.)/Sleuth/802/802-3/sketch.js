/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 6174876
CaseNum: 802-2-76534714-6174876

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

- Write a function called buildWinningHand and call it from setup.
- The function should take each card in winningHand and seacrh for a match in playing_cards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 4 and 95.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var playing_cards = [
	{ suit: "Spades", value: "A" },
	{ suit: "Spades", value: "2" },
	{ suit: "Spades", value: "3" },
	{ suit: "Spades", value: "4" },
	{ suit: "Spades", value: "5" },
	{ suit: "Spades", value: "6" },
	{ suit: "Spades", value: "7" },
	{ suit: "Spades", value: "8" },
	{ suit: "Spades", value: "9" },
	{ suit: "Spades", value: "10" },
	{ suit: "Spades", value: "J" },
	{ suit: "Spades", value: "Q" },
	{ suit: "Spades", value: "K" },
	{ suit: "Clubs", value: "A" },
	{ suit: "Clubs", value: "2" },
	{ suit: "Clubs", value: "3" },
	{ suit: "Clubs", value: "4" },
	{ suit: "Clubs", value: "5" },
	{ suit: "Clubs", value: "6" },
	{ suit: "Clubs", value: "7" },
	{ suit: "Clubs", value: "8" },
	{ suit: "Clubs", value: "9" },
	{ suit: "Clubs", value: "10" },
	{ suit: "Clubs", value: "J" },
	{ suit: "Clubs", value: "Q" },
	{ suit: "Clubs", value: "K" },
	{ suit: "Hearts", value: "A" },
	{ suit: "Hearts", value: "2" },
	{ suit: "Hearts", value: "3" },
	{ suit: "Hearts", value: "4" },
	{ suit: "Hearts", value: "5" },
	{ suit: "Hearts", value: "6" },
	{ suit: "Hearts", value: "7" },
	{ suit: "Hearts", value: "8" },
	{ suit: "Hearts", value: "9" },
	{ suit: "Hearts", value: "10" },
	{ suit: "Hearts", value: "J" },
	{ suit: "Hearts", value: "Q" },
	{ suit: "Hearts", value: "K" },
	{ suit: "Diamonds", value: "A" },
	{ suit: "Diamonds", value: "2" },
	{ suit: "Diamonds", value: "3" },
	{ suit: "Diamonds", value: "4" },
	{ suit: "Diamonds", value: "5" },
	{ suit: "Diamonds", value: "6" },
	{ suit: "Diamonds", value: "7" },
	{ suit: "Diamonds", value: "8" },
	{ suit: "Diamonds", value: "9" },
	{ suit: "Diamonds", value: "10" },
	{ suit: "Diamonds", value: "J" },
	{ suit: "Diamonds", value: "Q" },
	{ suit: "Diamonds", value: "K" },
];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [
	{ type: "Clubs", no: "K" },
	{ type: "Spades", no: "J" },
	{ type: "Spades", no: "Q" },
	{ type: "Clubs", no: "J" },
	{ type: "Hearts", no: "Q" },
];
var hand = [];

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);

	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed());
	//call your buildWinningHand function here
	buildWinningHand();
}

//write your buildWinningHand function here

function buildWinningHand() {
	for (var i = 0; i < winningHand.length; i++) {
		for (var j = 0; j < playing_cards.length; j++) {
			if (
				winningHand[i].type == playing_cards[j].suit &&
				winningHand[i].no == playing_cards[j].value
			) {
				hand.push(playing_cards[j]);
				break;
			}
		}
	}

}

//write your shuffleSeed() function here.
function shuffleSeed(){
	var shuffleSeed = [];
	for (var i = 0; i < 52; i++){
		shuffleSeed.push(round(random(4, 95)));
	}
	return shuffleSeed;

};

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
	//shuffle the deck by rotating the cards location with the values in
	//shuffleSeed. Repeat this a random number of times between 20 and 50
	var shuffleIterations = parseInt(random(20, 50));
	for (var i = 0; i < shuffleIterations; i++) {
		for (var j = 0; j < playing_cards.length; j++) {
			var tempCard = playing_cards.splice(j, 1);
			var newLoc = (j + shuffleSeed[j]) % 52;
			playing_cards.splice(newLoc, 0, tempCard[0]);
		}
	}
}

function draw() {
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) {
		drawCounter++;
		if (drawCounter == 5) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (i < hand.length) {
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}
}

function drawCard(card, x, y) {
	var values = [
		"A",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
	];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.value == values[j] && card.suit == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
