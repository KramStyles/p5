class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.half = 50;
  }

  display() {
    // Use translate to set the new origin point for the rectangle
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, 50);
  }

  move() {
    // rotate when mouse is on the center of the rectangle.
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance < this.half) this.angle += 1;
  }
}
