// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

let catImg;

function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  catImg = loadImage("assets/images/cat1.png");
}

function setup() {
  createCanvas(800, 600);
  background('#BAEFFF');

  // Text Speech
  textAlign(CENTER);
  textSize(14);
  textStyle(BOLD);
  fill(0);
  text("Meow, meow, meow, meow!", width / 2, height / 5);

  // Grass (background floor)
  noStroke();
  fill('#75962C');
  rect(0, height - height / 5, width, height / 5);

  // Bushes
  fill('#A2C25B');
  ellipse(0, 550, 300);
  ellipse(150, 550, 180);
  ellipse(width, 550, 210);

  fill('#C1DB88');
  ellipse(100, height, 160);
  ellipse(0, height, 200);
  ellipse(700, height, 200);

  let originX = 250;
  let originY = 200;

  // Jenga Blocks
  stroke('#45041A');
  strokeWeight(2);
  fill('#E882A6');
  rect(originX - 30, originY, 280, 50, 5);

  stroke('#1C3B08');
  fill('#ABE882');
  rect(originX - 10, originY + 50, 93, 50, 5);
  
  stroke('#080C3B');
  fill('#646DD9');
  rect(originX + 83, originY + 50, 93, 50, 5);

  stroke('#301F05');
  fill('#FCB149');
  rect(originX + 176, originY + 50, 93, 50, 5);

  stroke('#063040');
  fill('#3DAED9');
  rect(originX, originY + 100, 280, 50, 5);

  stroke('#59530A');
  fill('#FFF15C');
  rect(originX, originY + 150, 93, 50, 5);
  
  stroke('#45041A');
  fill('#E882A6');
  rect(originX + 93, originY + 150, 93, 50, 5);

  stroke('#080C3B');
  fill('#646DD9');
  rect(originX, originY + 200, 280, 50, 5);

  stroke('#063040');
  fill('#3DAED9');
  rect(originX, originY + 250, 93, 50, 5);

  stroke('#59530A');
  fill('#FFF15C');
  rect(originX + 186, originY + 250, 93, 50, 5);

  stroke('#1C3B08');
  fill('#ABE882');
  rect(originX, originY + 300, 280, 50, 5);

  stroke('#301F05');
  fill('#FCB149');
  rect(originX, originY + 350, 93, 50, 5);
  
  stroke('#45041A');
  fill('#E882A6');
  rect(originX + 186, originY + 350, 93, 50, 5);

  image(catImg, height - 230, 85, catImg.width / 6, catImg.height / 6);

}
