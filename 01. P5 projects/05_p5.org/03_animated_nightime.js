let cloudOneX, lineOneX, lineOneY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cloudOneX = 50;
  lineOneX = 0;
  lineOneY = 0;
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

  // Draw shooting stars
  stroke("yellow");
  line(lineOneX, lineOneY, lineOneX - 300, lineOneX - 300);

  //set shooting star to random location
  lineOneX = random(0, width);
  lineOneY = random(0, height / 2);

  // Silver cloud
  noStroke();
  fill("silver");
  ellipse(cloudOneX, 100, 200, 100);
  ellipse(cloudOneX + 180, 100, 120, 50);
  ellipse(cloudOneX + 200, 150, 80, 30);

  // Sets the x coordinate to the frame count
  cloudOneX = frameCount % width;

  // Grass
  fill("rgb(50%, 75%, 50%)");
  rect(0, height - 200, width, 200);

  // Growing Tree
  fill(118, 80, 72);
  rect(width - 400, height - 250, 20, 150);
  fill("darkgreen");
  // rectangle(width - 450, 330, 1345, 1240 - frameCount % 290, 1370, 1330)
  rect(width - 415, height - 250, 50, 0 - (frameCount % 490));

  // Display x and y position of the mouse
  fill("white");
  let position = `${mouseX}, ${mouseY}`;
  text(position, 20, 20);
}
