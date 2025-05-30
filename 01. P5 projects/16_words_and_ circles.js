let nums = [100, 25, 50, 72];
let words = ["rainbow", "heart", "michael", "jamie", "ilia"];
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  showWord()
  showCircles()
}

function mousePressed() {
  index += 1;
  if (index == words.length) {
    index = 0;
  }
}

function showCircles(){
  stroke(255)
  fill(55)
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    ellipse(index * 100 + 100, 200, element)
  }
}

function showWord(){
  fill(255)
  textSize(32);
  text(words[index], 10, 100);
}
