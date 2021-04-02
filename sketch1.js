var canvas;
var radius = 400;
var angle = 0;
var speed = 0.01;
var centerX = 0;
var centerY = 0;


function setup() { 
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}

function draw() { 
  background(0);
  
  strokeWeight(8);
  stroke(255, 102, 0);
  noFill();
  ellipse(centerX, centerY, 100, 100);
  
  strokeWeight(8);
  stroke(255, 102, 0);
  noFill();
  var x = centerX + radius * cos(angle);
  var y = centerY + radius * sin(angle);
  ellipse(x, y, 150, 150);
  line(x, y, centerX, centerY);


  angle = angle + speed;
}
