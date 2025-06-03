let stepX, stepY;

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  colorMode(HSB, width, height, 100)
}

function draw() {
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (let gridY = 0; gridY < height; gridY += stepY) {
    for (let gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY)      
    }
  }
}