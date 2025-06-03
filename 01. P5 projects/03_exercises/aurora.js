let centerY; // Vertical center line of the aurora wave
let prevX; // Previous X used to connect the last x position of the wave
let prevY; // Previous Y used to connect the last y position of the wave
let waveHeight = 800; // The height of the aurora wave
let nx = 0; // Noise X Offset which controls the animation over time
let colorStart, colorEnd; // Aurora base colors
let stars = []; // Global stars array

class Stars {
  constructor() {
    this.x = random(width),
    this.y = random(height),
    this.size = random(0.5, 2),
    this.alpha = random(80, 180)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  centerY = height / 2;
  prevX = 0;
  prevY = centerY;
  frameRate(25);

  colorStart = color(20, 170, 50);
  colorEnd = color(150, 80, 150);

  // Initialize stars
  for (let i = 0; i < 300; i++) {
    stars.push(new Stars());
  }
}

function draw() {
  background(20, 20, 50, 20);
  
  // render stars
  noStroke();
  for (let star of stars) {
    fill(255, star.alpha);
    ellipse(star.x, star.y, star.size);
  }

  let alpha = map(mouseX, 0, width, 40, 300);
  for (let index = 0; index < width; index++) {
    if (index == 0) prevX = 0;

    let y = centerY + map(noise(index * 0.01, nx), 0, 1, -waveHeight, waveHeight);
    let depthGreen = map(noise(index * 0.05, nx), 0, 1, 20, waveHeight);
    let depthPink = map(noise(index * 0.1, nx), 0, 1, -waveHeight / 4, waveHeight * 1.5);

    let blendFactor = index / width; // Normalized position across the screen
    let blend = lerpColor(colorStart, colorEnd, blendFactor);
    blend.setAlpha(alpha / 12); // control transparency

    stroke(blend);
    line(prevX, prevY, index - depthPink, y - depthPink);

    prevX = index;
    prevY = y;
  }
  nx += 0.015;
}
