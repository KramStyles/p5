let pos = 0;
let speed = 5;
let boxSize = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  fill(255);
  noStroke();
  ellipse(pos, (height/2 - (boxSize/2)), boxSize);

  if (pos >= width || pos <= 0){
    if (speed > 0) speed ++;
    else speed--;
    speed = speed * -1;
  }

  pos += speed;
}
