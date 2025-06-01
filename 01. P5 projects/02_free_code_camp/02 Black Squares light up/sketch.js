let blocks = [];
let cols;
let rows;
let size = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  const half = size / 2;
  cols = width / size;
  rows = height / size;

  for (let index = 0; index < cols; index++) {
    blocks[index] = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      blocks[index][rowIndex] = new Block(
        half + index * size,
        half + rowIndex * size
      );
    }
  }
}

function draw() {
  background(20);
  for (let index = 0; index < cols; index++) {
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      blocks[index][rowIndex].move();
      blocks[index][rowIndex].display();
    }
  }
}
