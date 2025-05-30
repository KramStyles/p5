let ball = {
  x: 300,
  y: 200,
  xSpeed: 5,
  ySpeed: -4,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function move() {
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(random(255))
  circle(ball.x, ball.y, 70, 70);
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xSpeed *= -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.ySpeed *= -1;
  }
}

function draw() {
  background(20);
  display();
  move();
  bounce();
}
