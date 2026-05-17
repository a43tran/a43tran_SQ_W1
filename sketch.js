// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

let catImg;

function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  catImg = loadImage("assets/images/cat.png");
}

function setup() {
  createCanvas(800, 600);
  background('#298499');

  textAlign(CENTER);
  textSize(14);
  fill(0);
  text("Meow, meow, meow, meow", width / 2, height / 2);

  image(catImg, height - 200, 85, catImg.width / 6, catImg.height / 6);

  let originX = 280;
  let originY = 200;

  stroke('#45041A');
  strokeWeight(2);
  fill('#E882A6');
  rect(originX, originY, 280, 50);
}
