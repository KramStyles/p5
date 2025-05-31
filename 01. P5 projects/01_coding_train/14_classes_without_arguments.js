let bubbles = [];
let length = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let index = 0; index < length; index++) {
    bubbles[index] = new Bubble(random(width), random(height), random(100));
  }
}

function draw() {
  background(20);
  for (let index = 0; index < bubbles.length; index++) {
    bubbles[index].encourage();
  }
  
}

class Bubble {
  constructor(posX, posY, radius) {
    this.x = posX;
    this.y = posY;
    this.radius = radius;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    circle(this.x, this.y, this.radius * 2);
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
