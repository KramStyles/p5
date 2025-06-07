var rc;
let x = 0;

function setup() {
  createCanvas(1112, 834);
	colorMode(HSB, 200);
	let w = width
	//let x = 0
	let y = height/2
	rc = new rollercoaster(x,y,w)
	rc.calc();
}

function draw() {
  background(120, 40, 200);
  rc.render();
	rc.animate()
}

class rollercoaster{
	constructor(x,y,w,period){
		this.X = x
		this.Y = y
		this.period = 500; // How many pixels before the wave repeats
		this.resolution = 1; // Distance between each horizontal location
		this.dx = (TWO_PI / this.period) * this.resolution;
		this.w = w // Width of entire wave
		this.theta = random(PI); // Start angle at 0
		this.amplitude = random(50,200); // Height of wave
		this.yvalues = new Array(floor(this.w / this.resolution)); // Using an array to store height values for the wave
		this.tvalues = new Array(floor(this.w / this.resolution)); // Using an array to store angle values for the wave
		this.wavelen = this.yvalues.length
		this.actual = 0;
	}
	calc() {
		// For every x value, calculate a y value with sine function
		let x = this.theta;
		for (let i = 0; i < this.wavelen; i++) {
			this.yvalues[i] = sin(x) * this.amplitude;
			this.tvalues[i] = cos(x);
			x += this.dx;
		}
	}
	render() {
		//noStroke();
		fill(0);
		// A simple way to draw the wave with an ellipse at each location
		for (let x = 0; x < this.wavelen; x++) {
			ellipse(this.X + (x * this.resolution), this.Y + this.yvalues[x], 10, 10);
		}
		for (let x = 0; x < this.wavelen; x+=100) {
			push()
			stroke(0)
			strokeWeight(10)
			line(this.X + (x * this.resolution), this.Y + this.yvalues[x],this.X + (x * this.resolution),height)
			pop()
		}
	}
	animate() {
		let cw = 100
		if(this.actual+cw <= this.wavelen+(cw*2)){
			for(let i = 0; i < cw; i+=25){
				push()
				//noStroke();
				rectMode(CENTER)
				translate(this.X + (this.actual-i * this.resolution), this.Y-15 + this.yvalues[this.actual-i])
				rotate(this.tvalues[this.actual-i])
				fill(i, 200, 200);
				
				rect(0,0,25,15);
				fill(0)
				circle(-5,-15,10)
				circle(5,-15,10)
				pop()
				fill(120, 40, 200);
				noStroke();
				rect(0,0,20,20);   // hide artifact
				stroke(0);
				
			}
			this.actual+=4
		}
		else{
			this.actual = 0
		}
	}
}

// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  } 
}
