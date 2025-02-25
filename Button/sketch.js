var button = document.getElementById("button");

var bgColor = 0;

function setup() {
    var c = createCanvas(500, 500);
    c.parent("canvasWrapper");
}

function draw() {
    background(bgColor);
}

function randomizeBgColor() {
    bgColor = random(255);
}