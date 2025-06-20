let r = (g = b = 255);
let circleSize = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(r, g, b);
  noStroke();
  if (mouseIsPressed) {
    makeRandom();
  }
}

const makeRandom = () => {
  r = random(255);
  g = random(255);
  b = random(255);
  circleSize = random(25, 100);
  circle(mouseX, mouseY, circleSize);
};
