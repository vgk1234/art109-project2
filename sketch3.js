var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
}

function draw() {
  background(0);
  let radius = width * 1.5;

  orbitControl();

  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      stroke(153, 51, 153);
      noFill();
      sphere(70);
      pop();
    }
  }
}