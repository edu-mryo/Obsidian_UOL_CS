/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7360582
CaseNum: 201-3-25046888-7360582

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. 
Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


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
    vertex(479, 210)
    vertex(190, 290)
    vertex(225, 410)
    vertex(330, 404)
    vertex(497, 336)
    vertex(505, 385)
    vertex(600, 390)
    vertex(600, 390)
    vertex(590, 358)
    vertex(566, 367)
    vertex(535, 362)
    vertex(540, 334)
    vertex(552, 313)
    vertex(568, 313)
    vertex(576, 281)
    vertex(591, 260)
    vertex(591, 223)
    vertex(546, 164)
    vertex(507, 165)
    vertex(470, 97)
    vertex(477, 58)
    vertex(443, 54)
    vertex(439, 98)
    vertex(479, 210)
    endShape();






















    //A helpful mouse pointer
    push();
    fill(0);
    noStroke();
    text(mouseX + "," + mouseY, mouseX, mouseY);
    pop();


}
