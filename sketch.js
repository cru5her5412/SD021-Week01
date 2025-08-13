function setup() {
  ScreenHeight = 400;
  ScreenWidth = 600;
  createCanvas(ScreenWidth, ScreenHeight);
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
  fill(255, 0, 0);
  text(
    PlatCentreX + PlatWidth / 2 > PX && PX > PlatCentreX - PlatWidth / 2,
    PlatCentreX + PlatWidth / 2,
    100
  );
  fill(255);
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
  if (
    PlatCentreX + PlatWidth / 2 + 10 > PX &&
    PX > PlatCentreX - PlatWidth / 2 - 10 &&
    PY + 10 > PlatCentreY - PlatHeight / 2 &&
    PY - 10 <= PlatCentreY + PlatHeight / 2
  ) {
    if (PY + 10 + PAcc + 0.7 >= PlatCentreY - PlatHeight / 2) {
      PAcc = 0;
      PY = PlatCentreY - PlatHeight / 2 - 10;
    }
    PAcc = 0;
  } else {
    if (PAcc > 7 || PAcc + 0.7 > 7) {
      PAcc = 7;
    } else {
      PAcc = PAcc + 0.7;
    }
    PY = PY + PAcc;
  }
  if (keyIsDown(65)) {
    //left/a
    PX = PX - 10;
  }
  if (keyIsDown(68)) {
    PX = PX + 10;
  }
  if (PX < -10) {
    PX = ScreenWidth + 5;
  }
  if (PX > ScreenWidth + 10) {
    PX = -5;
  }
  if (PY < -10) {
    PY = ScreenHeight + 5;
  }
  if (PY > ScreenHeight + 10) {
    PY = -5;
  }
}
