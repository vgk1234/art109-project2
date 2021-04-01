var canvas;

var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
}

function draw() {
  col.r = random(50, 200);
  col.g = random(50, 100);
  col.b = random(50, 150);
  spot.X = random(0, width);
  spot.Y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.X, spot.Y, 50, 50);
}