function setup() {
  createCanvas(windowWidth, windowHeight);
  background("aqua");
}

function draw() {
  circle(width / 2, height / 2, 200);
  
  if (mouseIsPressed === true) fill(0);
  else fill(255);
  
  circle(mouseX, mouseY, 100)
  
}
