// Bounce Challenge

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
// Variables
let blueX = 200;
let greenY = 350;
let orangeX = 650;
let orangeY = 250;

blueRight = true;
greenDown = true;
orangeRight = true;
orangeDown = true;
// Loop
requestAnimationFrame(loop);
function loop() {
  // BG
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);

  // Blue
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, 100, 40, 40);

  if (blueRight === true) {
    blueX = blueX + 5;
  } else if (blueRight === false) {
    blueX = blueX - 5;
  }

  if (blueX >= 760) {
    blueRight = false;
  } else if (blueX <= 0) {
    blueRight = true;
  }

  // Green
  ctx.fillStyle = "green";
  ctx.fillRect(400, greenY, 40, 40);

  if (greenDown === true) {
    greenY = greenY + 5;
  } else if (greenDown === false) {
    greenY = greenY - 5;
  }

  if (greenY >= 560) {
    greenDown = false;
  } else if (greenY <= 0) {
    greenDown = true;
  }

  // Orange
  ctx.fillStyle = "orange";
  ctx.fillRect(orangeX, orangeY, 40, 40);

  if (orangeRight === true) {
    orangeX = orangeX + 5;
  } else if (orangeRight === false) {
    orangeX = orangeX - 5;
  }

  if (orangeX >= 760) {
    orangeRight = false;
  } else if (orangeX <= 0) {
    orangeRight = true;
  }

  if (orangeDown === true) {
    orangeY = orangeY + 5;
  } else if (orangeDown === false) {
    orangeY = orangeY - 5;
  }

  if (orangeY >= 560) {
    orangeDown = false;
  } else if (orangeY <= 0) {
    orangeDown = true;
  }

  requestAnimationFrame(loop);
}
