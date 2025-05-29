let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25);
  fill(150);
  ellipse(width/2 + timer, height/2 + timer, 25, 25);
  timer += 1;
}
