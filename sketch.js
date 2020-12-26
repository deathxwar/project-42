var H,M,S;
var ha,ma,sa;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  H=hour();
  M=minute();
  S=second();
  sa=map(S,0,60,0,360)
  ma=map(M,0,60,0,360)
  ha=map(H%12,0,12,0,360)
  //second
  push();
  rotate(sa);
  stroke("red")
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("red")
  strokeWeight(10);
  noFill();
  arc(0,0,280,280,0,sa)
 //second over
 //minutes 
  push();
  rotate(ma);
  stroke("blue")
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  stroke("blue")
  strokeWeight(10);
  noFill();
  arc(0,0,320,320,0,ma)
 // minutes over
 //hour
  push();
  rotate(ha);
  stroke("green")
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke("green")
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,ha)
  //hour over
  drawSprites();
}