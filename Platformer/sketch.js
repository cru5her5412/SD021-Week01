function setup() {
  ScreenHeight = 400;
  ScreenWidth = 600;
  createCanvas(ScreenWidth, ScreenHeight);
  rectMode(CENTER);
  PX = width / 2;
  PY = height / 2;
  PlatCentreX = [200, 400];
  PlatCentreY = [300, 40];
  PlatWidth = [360, 360];
  PlatHeight = [20, 20];
  PAcc = 0;
  testarray = ["1", "2", "3", "4"];
}

function draw() {
  // fill(255,0,0);

  background(220);
  //text((testarray.length), 100, 100);
  //fill(255)
  createPlatform();
  createPlayer();
  MovePlayer();
}
function createPlatform() {
  for (i = 0; i < PlatCentreY.length; i++) {
    fill(255, 0, 0);
    rect(PlatCentreX[i], PlatCentreY[i], PlatWidth[i], PlatHeight[i]);
    fill(255);
  }
}
function createPlayer() {
  fill(0, 0, 255);
  rect(PX, PY, 20, 20);
  fill(255);
}
function MovePlayer() {
  for (i = 0; i < PlatCentreY.length; i++) {
    if (
      PlatCentreX[i] + PlatWidth[i] / 2 + 10 > PX &&
      PX > PlatCentreX[i] - PlatWidth[i] / 2 - 10 &&
      PY + 10 > PlatCentreY[i] - PlatHeight[i] / 2 &&
      PY - 10 <= PlatCentreY[i] + PlatHeight[i] / 2
    ) {
      if (PY + 10 + PAcc + 0.7 >= PlatCentreY[i] - PlatHeight[i] / 2) {
        PAcc = 0;
        PY = PlatCentreY[i] - PlatHeight[i] / 2 - 10;
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
}
