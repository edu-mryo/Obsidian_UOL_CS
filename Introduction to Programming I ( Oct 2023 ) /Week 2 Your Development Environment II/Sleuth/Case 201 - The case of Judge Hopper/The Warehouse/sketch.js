/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6174876
CaseNum: 201-3-82515929-6174876

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(415, 135);
    vertex(369, 148);
    vertex(319, 210);
    vertex(227,221);
    vertex(221, 232);
    vertex(237, 252);
    vertex(310, 250);
    vertex(382, 237);
    vertex(411, 486);

    vertex(433, 533);
    vertex(530, 500);
    vertex(540, 417);
    vertex(504, 243);
    vertex(550, 236);
    vertex(568, 177);
    vertex(565, 145);
    vertex(537, 159);
    vertex(535, 209);
    vertex(448, 136);
    vertex(415, 135);

    endShape();


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
