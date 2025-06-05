let sunHeight, horizon;

function setup() {
  createCanvas(windowWidth, windowHeight);
  horizon = height - 300;
}

function draw() {
  background("#333");
  sunHeight = mouseY;

  if (sunHeight < horizon) {
    background("lightblue")
  }

  // Sun
  // strokeWeight(20)
  stroke("orange");
  fill("yellow");
  circle(width / 2, sunHeight, 200);

  // Grass
  noStroke();
  fill("darkgreen");
  rect(0, horizon, width, 300);
}
