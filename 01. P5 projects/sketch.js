function setup() {
  createCanvas(windowWidth * 2, windowHeight);
}

function draw() {
  background(22);
  strokeWeight(20);
  stroke(255);

  point(0, 200);
  point(200, 400);
  point(400, 400);
  point(600, 300);

  vertexBezier();
  position();
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
  beginShape();
  vertex(0, 200);
  // vertex(600, 300) // Lead to a single straight line
  bezierVertex(400, 200, 400, 400, 600, 600);
  bezierVertex(800, 800, 900, 800, 1200, 300);
  bezierVertex(1250, 200, 1300, 300, 1350, 300);
  endShape();

  beginShape();
  vertex(1400, 300);
  bezierVertex(1500, 250, 1600, 400, 1800, 600);
  bezierVertex(2100, 900, 2200, 800, 2400, 200);
  bezierVertex(2450, 100, 2500, 300, 2550, 300);
  endShape();
}

function position() {
  push();
  let position = `${mouseX}, ${mouseY}`;
  stroke(255);
  strokeWeight(1);
  textSize(30)
  text(position, 120, 120);
  pop();
}
