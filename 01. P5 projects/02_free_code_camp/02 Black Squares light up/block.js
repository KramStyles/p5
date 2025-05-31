class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.half = 30;
    this.colour = 70;
    this.offset = 4;
  }

  display() {
    // Use translate to set the new origin point for the rectangle
    stroke(this.colour);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, 50 - this.offset, 50 - this.offset);
    pop();
  }

  move() {
    // If the mouse is moving, check distance between mouse location and center of square.
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      // rotate when mouse is on the center of the rectangle.
      distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < this.half) {
        this.angle += 1;
        this.colour = 255;
      }
    }
    // If squares are already rotating, keep rotating until angle = 90
    if (this.angle > 0 && this.angle < 90){
      this.angle += 1;
      this.colour -= 2;
    }
    else {
      this.angle = 0;
      this.colour = 70;
    }
  }
}
