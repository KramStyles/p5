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
  bubbles.forEach((bubble, index) => {
    if (bubble.rollover(mouseX, mouseY)) bubbles.splice(index, 1);
  });
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

  changeColour() {
    this.alpha = 125;
  }

  rollover(px, py) {
    const distance = dist(px, py, this.x, this.y);
    return distance < this.radius;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  encourage() {
    this.show();
    this.move();
    if (this.rollover(mouseX, mouseY)) this.alpha = 125;
    else this.alpha = 50;
  }
}
