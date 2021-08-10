var boy;
function preload(){
  back = loadImage("snow1.jpg")
  boyImg = loadAnimation("1.png","2.png","3.png","4.png")
}
function setup() {
  createCanvas(800,400);

}

function draw() {
  background(back);  
  drawSprites();
}