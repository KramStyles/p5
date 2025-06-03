function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235);

  // Draw a sun in the top right corner
  fill("yellow");
  stroke("orange");
  strokeWeight(50);
  circle(width - 100, 100, 200);

  // Draw the grass
  fill("green");
  noStroke();
  rect(0, height - 200, width, 200);

  drawBugsAndFlowers();
}

function drawBugsAndFlowers() {
  for (let index = 0; index < 50; index++) {
    textSize(random(25, 40));
    text("🐞", random(width), random(height - 10, height - 150));
  }

  for (let index = 0; index < 100; index++) {
    textSize(random(25, 50));
    text("🌸", random(width), random(height - 10, height - 150));
  }
  noLoop(); // To prevent the looping behavior.
}
