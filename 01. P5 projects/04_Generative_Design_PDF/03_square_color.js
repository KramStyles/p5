let speed;
function setup() {
  createCanvas(720, 720);
  noCursor();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // Calculate distance between actual and previous mouse position (speed of mouse)
  speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  background(mouseY / 2, 100, 100);
  fill(width/2 - mouseY / 2, 100, 100);
  rect(height/2, height/2, mouseX + 1, mouseX + 1);
}
