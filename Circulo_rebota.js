var x = 200;
var vel = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	ellipse(x,200,100,100);
	x=x+vel;
	if(x < 50 || x > 350) {
		vel = vel*-1;
	}
}
