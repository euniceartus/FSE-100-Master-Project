let y = 100;
let y2=200;
let x=100;
let x2=200;
let directionX = 1;
let directionY = 1;
let directionX2 = 1;
let directionY2 = 1;


function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  background(220);
  fill("green");
  circle(x, y, 200);
  if (y < 400 && directionY == 1) {
    y = y + 1;
    if (y >= 400) {
      directionY = 0;
    }
  } else if (x < 400 && directionY == 0 && directionX == 1) {
    x = x + 1;
    if (x >= 400) {
      directionX = 0;
    }
  } else if (y > 100 && directionX == 0) {
    y = y - 1;
    if (y <= 100) {
      directionY = -1;
    }
  } else if (x > 100 && directionY == -1) {
    x = x - 1;
    if (x <= 100) {
      directionX = -1;
    }
  }
 
  
  fill("pink");
  rect(x2, y2, 200, 100);
  if (y2 > 0 && directionY2 == 1) {
    y2 = y2 - 1;
    if (y2 <= 0) {
      directionY2 = 0;
    }
  } else if (x2 > 0 && directionY2 == 0 && directionX2 == 1) {
    x2 = x2 - 1;
    if (x2 <= 0) {
      directionX2 = 0;
    }
  } else if (y2 < 200 && directionX2 == 0) {
    y2 = y2 + 1;
    if (y2 >= 200) {
      directionY2 = 1;
    }
  } else if (x2 < 200 && directionY2 == 1) {
    x2 = x2 + 1;
    if (x2 >= 200) {
      directionX2 = 1;
    }
  }

  fill("red");
  
  triangle(0,400,200,400,100,200);


  fill("black");
  textSize(20);
  text("Fatima Aghayeva", 240, 380);
  text("Elizabeth Macias",240, 50);
  
}
