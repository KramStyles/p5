let bubble, bubble1, bubble2, bubble3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble = new Bubble(random(width), random(height), random(80));
  bubble1 = new Bubble(random(width), random(height), random(80));
  bubble2 = new Bubble(random(width), random(height), random(80));
  bubble3 = new Bubble(random(width), random(height), random(100));
}

function draw() {
  background(20);
  bubble.encourage();
  bubble1.encourage();
  bubble2.encourage();
  bubble3.encourage();
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
