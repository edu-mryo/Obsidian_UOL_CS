var flowers;
var flower;

function setup() {
  createCanvas(1000, 500);
  base_x = width / 2;
  base_y = height - 50;

  flowers = [];


  /**
   * We needed to put the flower obj inside the for loop or otherwise the array gets updated every iteration
   * Causing the flower to be pushed in one side.
   */
  for (var i = 0; i < 10; i++) {
    flower = {
      base_x: i * 100,
      base_y: height - 50,
      stem_h: random(50, 400),
      col: color(random(0, 255), random(0, 255), random(0, 255)),
    };
    flowers.push(flower);
  }
  

}

function draw() {
  background(150, 150, 250);
  for (var i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i]);
  }
  
  
}

function drawFlower(_flower) {
  noFill();
  strokeWeight(10);
  stroke(0, 200, 50);
  curve(
    //The original parameter had flower.base_x ... so updated to _flower
    _flower.base_x + 200,
    _flower.base_y + 100,
    _flower.base_x,
    _flower.base_y,
    _flower.base_x,
    _flower.base_y - _flower.stem_h,
    _flower.base_x - 200,
    _flower.base_y - (_flower.stem_h + 100)
  );

  noStroke();
  fill(_flower.col);
  ellipse(_flower.base_x + 45, _flower.base_y - _flower.stem_h, 70, 50);
  ellipse(_flower.base_x - 45, _flower.base_y - _flower.stem_h, 70, 50);
  ellipse(_flower.base_x, _flower.base_y + 45 - _flower.stem_h, 50, 70);
  ellipse(_flower.base_x, _flower.base_y - 45 - _flower.stem_h, 50, 70);

  
  /**flip the colour
   * This still bugs me because the flower is constantly changing colour.
   * **/
  _flower.col = color(blue(_flower.col), red(_flower.col), green(_flower.col));
  

  //draw the center
  fill(_flower.col)
  ellipse(_flower.base_x, _flower.base_y - _flower.stem_h, 50, 50);
}
