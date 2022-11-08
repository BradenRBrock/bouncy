var dx = 2
var dy = .9
var x = 0
var y = 0

function setup() {
   x = 0
   y = 0
  createCanvas(400, 400);
}

function draw() {
  x = x + dx
  y = y + dy
  if((x > 400) | (x<0)){
    dx = -dx
  }
  if((y > 400) | (y < 0)){
    dy = -dy
  }
  background(220);
  circle(x,y,10)
}