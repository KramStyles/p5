function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(width / 2, height / 2);
  let circleResolution = map(mouseY, 0, height, 2, 80);
  let radius = mouseX - width / 2 + 0.5;
  let angle = TWO_PI / circleResolution;
  strokeWeight(mouseY / 20);
  let value = map(255, 0, mouseX, 0, mouseY)
  beginShape();
  for (let index = 0; index <= circleResolution; index++) {
    let x = cos(angle + index) * radius;
    let y = sin(angle + index) * radius;
    line(0, 0, x, y);
    fill(value / random(3), value / random(3), value / random(3))
    stroke(value / random(3), value, value)
    vertex(x, y)
  }
  endShape();
}
