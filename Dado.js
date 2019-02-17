function uno(){
  rect(100,100,200,200);
  ellipse(200,200,50,50);
}


function dos(){
  rect(100,100,200,200);
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
}


function tres(){
  rect(100,100,200,200);
  ellipse(200,200,50,50);
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
}


function cuatro(){
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
  ellipse(150,250,50,50);
  ellipse(250,150,50,50);
}


function cinco(){
  rect(100,100,200,200);  
  ellipse(200,200,50,50);
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
  ellipse(150,250,50,50);
  ellipse(250,150,50,50);
}

function seis(){
  rect(100,100,200,200);
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
  ellipse(150,250,50,50);
  ellipse(250,150,50,50);
  ellipse(150,200,50,50);
  ellipse(250,200,50,50);
}


function setup() {
  createCanvas(400, 400);
background(255);
}


function mousePressed() {
  	
  
  var dado=random(1,7);

      if(dado<1){
      uno();
      }
      else if (dado<2){
      dos();
      }
      else if(dado<3){
      tres();
      }
      else if (dado<4){
      cuatro();
      }
      else if (dado<5){
      cinco();
      }
      else {
      seis();
      }
   }
