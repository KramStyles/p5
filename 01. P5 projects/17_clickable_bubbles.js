let bubbles = [];
let length = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let index = 0; index < length; index++) {
    bubbles[index] = new Bubble(random(width), random(height), random(100));
  }
}

function draw() {
  background(20);

  for (let bubble of bubbles) {
    bubble.encourage();
  }
}

function mousePressed() {
  for (let bubble of bubbles) {
    bubble.clicked();
  }
}

class Bubble {
  constructor(posX, posY, radius) {
    this.x = posX;
    this.y = posY;
    this.radius = radius;
    this.alpha = 50;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  clicked() {
    const distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.radius) {
      this.alpha = 125;
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  encourage() {
    this.show();
    this.move();
  }
}
