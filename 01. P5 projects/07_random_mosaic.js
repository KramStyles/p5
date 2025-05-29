let squareSize = 150;
let lineWidth = 8;
let x, y, r, g, b;

function setup() {
  createCanvas(600, 400);
  background(100);
}

function draw() {
  // background(100);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 255);
  fill(0, 200, 0);
  rect(200, 150, squareSize);

  // Make mosaic circle
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(600);
  y = random(400);
  noStroke()
  fill(r, g, b);
  circle(x, y, 25);
}

function mousePressed() {
  background(10);
  squareSize = random(50, 250);
  lineWidth = random(2, 10);
}
