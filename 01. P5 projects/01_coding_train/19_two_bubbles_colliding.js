let bubble1, bubble2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble1 = new Bubble(
    200,
    200,
    60,
    (xSpeed = random(5)),
    (ySpeed = random(8))
  );
  bubble2 = new Bubble(400, 200, 100);
}

function draw() {
  background(20);
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();

  if (bubble1.intersects(bubble2)) {
    fill(100);
    strokeWeight(4);
    background(255, 255, 255, 100);
  }
}

class Bubble {
  constructor(posX, posY, radius = 50, xSpeed = 5, ySpeed = -4) {
    this.x = posX;
    this.y = posY;
    this.radius = radius;
    this.alpha = 50;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  rollover(px, py) {
    const distance = dist(px, py, this.x, this.y);
    return distance < this.radius;
  }

  move() {
    // this.x += random(-5, 5);
    // this.y += random(-5, 5);
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.bounce();
  }

  intersects(bubble) {
    const distance = dist(this.x, this.y, bubble.x, bubble.y);
    return distance < this.radius + bubble.radius;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  encourage() {
    this.show();
    this.move();
    if (this.rollover(mouseX, mouseY)) this.alpha = 125;
    else this.alpha = 50;
  }
}
