//Cambio del color de fondo al dar clic dentro del área de un cuadrado
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
	if(mouseIsPressed) {
		if(mouseX > 150 && mouseX < 250) {
			if(mouseY > 150 && mouseY < 250) {
			background(0,255,0);
		}
	}
}
rect(150,150,100,100);
}
