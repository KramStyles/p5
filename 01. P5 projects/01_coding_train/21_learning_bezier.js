function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(22);
  strokeWeight(20);
  stroke(255);

  point(0, 300);
  point(mouseX, mouseY);
  point(400, 400);
  point(600, 300);

  vertexBezier();
}

function normalBezier() {
  noFill();
  strokeWeight(4);
  bezier(0, 300, mouseX, mouseY, 400, 400, 600, 300);

  strokeWeight(2);
  line(0, 300, mouseX, mouseY);
  line(400, 400, 600, 300);
}

function vertexBezier() {
  strokeWeight(4);
  noFill();
  beginShape()
  vertex(0, 300)
  // vertex(600, 300) // Lead to a single straight line
  bezierVertex(mouseX, mouseY, 400, 400, 600, 300)
  endShape()
}
