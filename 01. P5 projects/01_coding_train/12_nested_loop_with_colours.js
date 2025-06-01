function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  strokeWeight(5);
  stroke(255);

  for (let size = 0; size < mouseX; size += 50) {
    for (let index = 0; index < mouseY; index += 50) {
      fill(random(255), random(255), random(255));
      ellipse(size, index, 20);
    }
  }
}
