function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  // ellipse(mouseX, mouseY, 40);
  // console.log("key pressed?:", keyIsPressed);
  // console.log("last pressed key: ", key);
  strokeWeight(4)
  point(mouseX, mouseY, 40);
}
