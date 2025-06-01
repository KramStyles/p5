// Flow / Variables

let pos = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  // background(0);
  noStroke();
  fill(mouseX);
  ellipse(pos, 200, 100, 100)
  circle(mouseX, mouseY, 24)

  setInterval(() => {
    pos += 1
  }, 2000);
}

function mousePressed() {
  background(0);
}
