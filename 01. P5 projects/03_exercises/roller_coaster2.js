let c1, c2, c3, c4, c5;
let x1, y1, x2, y2, x3, y3, x4, y4, x5, y5;
let theta1, theta2, theta3, theta4, theta5;
let axisX, axisY;

function setup() {
  createCanvas(1000, 400);
  background(239, 200, 196);
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;
  x3 = 0;
  y3 = 0;
  x4 = 0;
  y4 = 0;
  x5 = 0;
  y5 = 0;
  c1 = new Car(x1, y1 + 200, 1);
  c2 = new Car(x2, y2 + 200, 3);
  c3 = new Car(x3, y3 + 200, 1);
  c4 = new Car(x4, y4 + 200, 3);
  c5 = new Car(x5, y5, 4);

  theta1 = -PI / 6;
  theta2 = 2 * PI - PI / 6 - PI / 50; // 5.696
  theta3 = PI - PI / 9.2;
  theta4 = (2 * PI) / 3 + PI / 50;
  theta5 = (2 * PI) / 3 + PI / 50;

}

function draw() {
  background(239, 200, 196);
  noStroke();
  fill(236, 172, 172);
  bezier(0, 225, 100, 100, 200, 100, 255, 225);
  rect(0, 225, 255, 200);

  fill(236, 172, 172);
  rect(600, 230, 200, 150);
  fill(239, 200, 196);
  ellipse(700, 239, 205, 100);

  fill(236, 172, 172);
  rect(250, 205, 60, 250);
  fill(239, 200, 196);
  ellipse(285, 205, 65, 100);

  // small car track
  noFill();
  stroke(200, 200, 200);
  strokeWeight(5);
  bezier(0, 250, width / 3, 190, (width * 2) / 3, 190, width, 250);

  // small car
  push();
  translate(width / 2, 355);
  scale(0.5);
  c5.x = axisX + sin(theta5) * 1400; // sin(a)
  c5.y = axisY + cos(theta5) * 300;
  c5.display();
  pop();

  noStroke();
  fill(0, 172, 172);
  bezier(800, 250, 880, 100, 920, 130, width, 250);
  rect(800, 250, 200, height - 250);

  fill(0, 172, 172);
  bezier(300, 250, 400, 50, 500, 100, 600, 250);
  rect(300, 250, 300, 150);

  // // water
  // fill(119, 195, 242);
  // noStroke();
  // rect(0, height - 30, width, 30);

  // // poles
  // push();
  // noStroke();
  // fill(255);
  // rect(10, height - 257, 5, 257 - 20, 5);
  // rect(70, height - 320, 5, 320 - 20, 5);
  // rect(130, height - 345, 5, 345 - 20, 5);
  // rect(190, height - 350, 5, 350 - 20, 5);
  // rect(250, height - 336, 5, 336 - 20, 5);
  // rect(310, height - 300, 5, 300 - 20, 5);
  // rect(370, height - 225, 5, 225 - 20, 5);
  // rect(430, height - 180, 5, 180 - 20, 5);
  // rect(490, height - 160, 5, 160 - 20, 5);
  // rect(550, height - 160, 5, 160 - 20, 5);
  // rect(610, height - 180, 5, 180 - 20, 5);
  // rect(670, height - 200, 5, 200 - 20, 5);
  // rect(730, height - 200, 5, 200 - 20, 5);
  // rect(790, height - 180, 5, 180 - 20, 5);
  // rect(850, height - 130, 5, 130 - 20, 5);
  // rect(910, height - 75, 5, 75 - 20, 5);
  // rect(970, height - 55, 5, 55 - 20, 5);
  // pop();

  // noFill();
  // strokeWeight(6);
  // stroke(10, 10, 100);
  // arc(179, 250, 400, 400, PI, 2 * PI - PI / 6 - PI / 50);
  // arc(520, 40, 400, 400, PI / 3, PI - PI / 6);
  // arc(699, 398, 400, 400, PI + PI / 2.7, 2 * PI - PI / 4.5);
  // arc(1013, 150, 400, 400, PI / 3, PI - PI / 4.8);

  // push();
  // translate(180, 250);
  // rotate(theta1);
  // if (theta1 < 4.2 && theta1 > 2) {
  //   c1.display();
  // }
  // pop();

  // push();
  // translate(520, 40);
  // rotate(theta2);
  // if (theta2 < 1 || theta2 > 5.9) {
  //   c2.display();
  // }
  // pop();

  // push();
  // translate(699, 397);
  // rotate(theta3);
  // if (theta3 > 2.59 && theta3 < 4.11) {
  //   c3.display();
  // }
  // pop();

  // push();
  // translate(1013, 150);
  // rotate(theta4);
  // if (theta4 < 0.85 || theta4 > 4) {
  //   c4.display();
  // }
  // pop();

  // if (theta1 > 2 * PI) theta1 = 0;
  // if (theta2 < 0) theta2 = 2 * PI;
  // if (theta3 > 2 * PI) theta3 = 0;
  // if (theta4 < 0) theta4 = 2 * PI;
  // theta1 += 0.01;
  // theta2 -= 0.01;
  // theta3 += 0.01;
  // theta4 -= 0.01;
  // theta5 += 0.008;
}

class Car {
  constructor(_x, _y, _orientation) {
    this.x = _x;
    this.y = _y;
    this.orientation = _orientation;
  }

  display() {
    if (this.orientation == 1) {
      // car
      fill(3, 90, 166);
      noStroke();
      rect(this.x - 1, this.y, 31, 15);
      rect(this.x + 10, this.y, +20, 30, 5);
      rect(this.x, this.y, -30, 15);
      ellipse(this.x - 20, this.y + 15, 20, 20);

      //person
      fill(251, 224, 137);
      ellipse(this.x, this.y + 20, 20, 18);

      //wheels
      fill(19, 37, 54);
      ellipse(this.x - 20, this.y, 10, 10);
      ellipse(this.x + 20, this.y, 10, 10);
    }
    if (this.orientation == 2) {
      // car
      fill(3, 90, 166);
      noStroke();
      rect(this.x, this.y, 31, 15);
      rect(this.x - 30, this.y, 20, 30, 5);
      rect(this.x, this.y, -30, 15);
      ellipse(this.x + 20, this.y + 15, 20, 20);

      //person
      fill(251, 224, 137);
      ellipse(this.x, this.y + 20, 20, 18);

      //wheels
      fill(19, 37, 54);
      ellipse(this.x - 20, this.y, 10, 10);
      ellipse(this.x + 20, this.y, 10, 10);
    }
    if (this.orientation == 3) {
      //car
      fill(3, 90, 166);
      noStroke();
      rect(this.x, this.y, -30, -15);
      rect(this.x - 10, this.y, -20, -30, 5);
      rect(this.x, this.y, 30, -15);
      ellipse(this.x + 20, this.y - 15, 20, 20);

      //person
      fill(251, 224, 137);
      ellipse(this.x, this.y - 20, 20, 18);

      //wheels
      fill(19, 37, 54);
      ellipse(this.x - 20, this.y, 10, 10);
      ellipse(this.x + 20, this.y, 10, 10);
    }
    if (this.orientation == 4) {
      //car
      fill(3, 90, 166);
      noStroke();
      rect(this.x, this.y, -30, -15);
      rect(this.x + 30, this.y, -20, -30, 5);
      rect(this.x, this.y, 30, -15);
      ellipse(this.x - 20, this.y - 15, 20, 20);

      //person
      fill(251, 224, 137);
      ellipse(this.x, this.y - 20, 20, 18);

      //wheels
      fill(19, 37, 54);
      ellipse(this.x - 20, this.y, 10, 10);
      ellipse(this.x + 20, this.y, 10, 10);
    }
  }
}
