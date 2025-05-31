let turnedOn = false;
let squareSize = 100;
let half = squareSize / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (turnedOn) background(0, 200, 200);
  else background(20);
  strokeWeight(10);
  stroke(255);
  fill(0, 0, 0, 0);
  square(width / 2 - half, height / 2 - half, squareSize);
}

function mousePressed() {
  if (
    mouseX > width / 2 - half &&
    mouseY > height / 2 - half &&
    mouseX < width / 2 - half + squareSize &&
    mouseY < height / 2 + squareSize
  ) {
    if (turnedOn) turnedOn = false;
    else turnedOn = true;
  }
}
