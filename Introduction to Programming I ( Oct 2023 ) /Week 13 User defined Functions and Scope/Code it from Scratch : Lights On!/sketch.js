var floorPos;
var windows = [];

function setup() {
    createCanvas(1000, 700);
    floorPos = (height * 3) / 4;
    windows = [{ x: width / 2 - 50, y: floorPos - 270, w: 100, h: 100, color: "Black" },
    { x: width / 4, y: floorPos - 270, w: 150, h: 70, color: "Black" },
    { x: width / 1.7, y: floorPos - 270, w: 150, h: 70, color: "Black" },
    { x: width / 4, y: floorPos - 120, w: 150, h: 70, color: "Black" },
    { x: width / 1.7, y: floorPos - 120, w: 150, h: 70, color: "Black" },


    ];

    background(85, 109, 124, 255);
    fill(83, 58, 84, 255);
    noStroke();
    rect(0, floorPos, width, height - floorPos);

};

function draw() {

    drawHouse();

};


function drawHouse() {

    // Roof
    fill(179, 50, 34, 255);
    triangle(width / 5, floorPos - 300, width / 2, floorPos - 450, width / 5 * 4, floorPos - 300);

    // House
    fill(250, 239, 213, 255);
    rect(width / 5, floorPos - 300, width / 5 * 3, 300);

    //Door
    fill(179, 50, 34, 255);
    rect(width / 2 - 50, floorPos - 150, 100, 150);

    // Windows
    for (let i = 0; i < windows.length; i++) {
        fill(windows[i].color);
        rect(windows[i].x, windows[i].y, windows[i].w, windows[i].h);
    }

}


function mousePressed() {

    for (let i = 0; i < windows.length; i++) {
        if (mouseX > windows[i].x && mouseX < windows[i].x + windows[i].w && mouseY > windows[i].y && mouseY < windows[i].y + windows[i].h && windows[i].color == "Black") {
            lightSwitch(windows[i]);
        } else if (mouseX > windows[i].x && mouseX < windows[i].x + windows[i].w && mouseY > windows[i].y && mouseY < windows[i].y + windows[i].h && windows[i].color == "Yellow") {
            windows[i].color = "Black";
        }
    }

}


function lightSwitch(window) {
    if (window.color == "Black") {
        window.color = "Yellow";
    }
    else if (window.color == "Yellow") {
        window.color = "Black";
    }
}

