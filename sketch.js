function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  PX = width / 2;
  PY = height / 2;
  PlatCentreX = 200;
  PlatCentreY = 380;
  PlatWidth = 360;
  PlatHeight = 20;
  PAcc = 0;
}

function draw() {
  background(220);
  createPlatform();
  createPlayer();
  MovePlayer();
}
function createPlatform() {
  fill(255, 0, 0);
  rect(PlatCentreX, PlatCentreY, PlatWidth, PlatHeight);
  fill(255);
}
function createPlayer() {
  fill(0, 0, 255);
  rect(PX, PY, 20, 20);
  fill(255);
}
function MovePlayer() {
  // a = (((PlatCentreX+(PlatWidth/2))<PX<(PlatCentreX-(PlatWidth/2)))&&((PlatCentreY-(PlatHeight/2))>PY>(PlatCentreY+(PlatHeight/2))))

  if (
    PlatCentreX + PlatWidth / 2 < PX < PlatCentreX - PlatWidth / 2 &&
    PY + 10 > PlatCentreY - PlatHeight / 2
  ) {
    PAcc = 0;
  } else {
    if (PAcc > 7 || PAcc + 0.7 > 7) {
      PAcc = 7;
    }
    if (PY + 10 + PAcc + 0.7 >= PlatCentreY - PlatHeight / 2) {
      PAcc = 0;
      PY = PlatCentreY - PlatHeight / 2 - 10;
    } else {
      PAcc = PAcc + 0.7;
    }
    PY = PY + PAcc;
  }
}
