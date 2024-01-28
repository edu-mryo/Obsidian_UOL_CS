

var floorPos_y;
var car;

function setup()
{

    createCanvas(1200,800);
    
    floorPos_y = 600;
    
    car = {x: 200, height:120, length: 130, wheelDia: 80, color: color(255,100,100)};
}

function draw()
{
    
    background(102,179,255);
    
    noStroke();
    fill(130);
    rect(0,floorPos_y,width, height - floorPos_y);
    
    renderCar(car);
    
    car.x += 1;
    
    if(car.x > width + 500)
    {
        car.x = -500;
    }
}


function renderCar(_car)
{
    fill(_car.color);
    stroke(0);
    
    //draw the car's body
    rect(
        _car.x, floorPos_y - _car.height
        , _car.length
        , _car.height - _car.wheelDia/2,
        20);
    
    //draw the windscreen
    fill(0,255,255);
    rect(
        _car.x + _car.length * 0.7, 
        floorPos_y - _car.height * 0.8, 
        _car.length * 0.2, 
        _car.height * 0.3, 
        5);
    
    
    //draw the wheels
    fill(65);
    ellipse(
        _car.x, 
        floorPos_y - _car.wheelDia/2, 
        _car.wheelDia
    );
    
    ellipse(
        _car.x + _car.length, 
        floorPos_y - _car.wheelDia/2, 
        _car.wheelDia);
}