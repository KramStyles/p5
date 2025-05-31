let block;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);

  const centerWidth = width / 2;
  const centerHeight = height / 2;
  block = new Block(centerWidth, centerHeight);
}

function draw() {
  background(20);
  block.display();
  block.move();
}
