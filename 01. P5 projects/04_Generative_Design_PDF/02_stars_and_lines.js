let number = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  frameRate(30);

  translate(40, 20);
  rotate(0.5);
  scale(1.5);

  fill(128);
  strokeWeight(1);
  circle(40, 50, 60);
  rect(50, 50, 40, 20);
}

function draw() {
  line(0, height, width, 0);
  for (let index = 0; index <= 5; index++) {
    line(0, 0, index * 20, 100);
    line(100, 0, index * 20, 100);
  }
  strokeWeight(2);
  if (mouseIsPressed) point(mouseX, mouseY);
  translate(40, 15);
  drawStar();
  translate(20, 50);
  drawStar();
}

function drawStar() {
  line(0, -10, 0, 10);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
}

function shinyCircle() {
  switch (number % 3) {
    case 0:
      fill(255, 0, 0);
      break;
    case 1:
      fill(0, 255, 0);
      break;
    default:
      fill(0, 0, 255);
      break;
  }
  ellipse(200, 200, 80);
  number += 1;
}
