let cloudOneX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cloudOneX = 50;
}

function draw() {
  background("navy");
  // frameRate(15);

  // Draw the moon
  fill(255);
  noStroke();
  circle(width - 100, 100, 200);

  // Overlapping navy circle for cresent moon
  fill("navy");
  circle(width - 150, 100, 200);

  //big gray mountains
  stroke(0);
  fill(80);
  triangle(75, 1000, 75, 200, 950, 1000);
  triangle(1000, 900, 1000, 300, 500, 900);

  // Silver cloud
  noStroke();
  fill("silver");
  ellipse(cloudOneX, 100, 200, 100);
  ellipse(cloudOneX + 180, 100, 120, 50);
  ellipse(cloudOneX + 200, 150, 80, 30);
  //sets the x coordinate to the frame count
  cloudOneX = frameCount % width;

  // Grass
  fill("rgb(50%, 75%, 50%)");
  rect(0, height - 200, width, 200);

  // Display x and y position of the mouse
  fill("white");
  let position = `${mouseX}, ${mouseY}`;
  text(`${mouseX}, ${mouseY}`, 20, 20);
}
