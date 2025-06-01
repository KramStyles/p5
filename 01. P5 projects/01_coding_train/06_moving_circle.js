let circleX = 100;
let color = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(color);
  noStroke();
  fill(255, 0, 0);
  circle(circleX, 150, 67);

  circleX += 2;
  color += 1;
}

function mousePressed() {
  color = 0;
  circleX = 0;
}
