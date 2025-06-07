// Destructure Matter.js components for cleaner usage
const { Engine, World, Bodies, Runner } = Matter;
let engine, boxes, world;

class Box {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create an engine
  engine = Engine.create();
  world = engine.world;
  boxes = []
  // Run the engine
  Runner.run(engine);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, 20, 20))
}

function draw() {
  background(51);
  for (const box in boxes) {
    if (Object.hasOwnProperty.call(boxes, box)) {
      const element = boxes[box];
      element.show()
    }
  }
}
