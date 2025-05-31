let x = (y = 200);
let extraCanvas, starX, starY;

function setup() {
  createCanvas(600, 400);
  extraCanvas = createGraphics(width, height);
  // extraCanvas.background(255, 0, 0);
  background(0);
}

function draw() {
  // No trails
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);

  // Trails
  if (mouseIsPressed) {
    extraCanvas.fill(255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 50, 50);
  }

  // Stars
  let starX = random(width);
  let starY = random(height);
  extraCanvas.ellipse(starX, starY, 10, 10);

  // Draw image canvas
  image(extraCanvas, 0, 0);

  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}
