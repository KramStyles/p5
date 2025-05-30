let red = 0;
let blue = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  blue = map(mouseX, 0, width, 0, 255);
  red = map(mouseX, 0, width, 255, 0);
  background(red, 0, blue);
  // circle
  noStroke();
  fill(250, 110, 220);
  circle(mouseX, 200, 70);
}
