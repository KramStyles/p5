function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  rectMode(CENTER);
  fill(0, 0, 200);
  stroke(0, 200, 0);
  strokeWeight(3)
  rect(200, 100, 150, 150);

  // noStroke()
  strokeWeight(8)
  fill(0, 0, 200, 100);
  ellipse(150, 150, 100, 100);
  stroke(255, 0, 0);
  strokeWeight(5)
  ellipse(260, 150, 100, 100);
}
