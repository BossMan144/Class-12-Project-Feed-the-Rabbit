var garden,rabbit,apples,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();
  drawSprites();
}

function createApples(){
  if (frameCount % 80 === 0) {
apples = createSprite(400,100,40,10);
apples.addImage (appleImg);
apples.x = Math.round(random(10,400));
apples.scale = 0.08;
apples.velocityY = 3;
apples.depth = rabbit.depth;
rabbit.depth = rabbit.depth+1;
  } 
}

function createLeaves(){
  if (frameCount % 60 === 0) {
leaves = createSprite(400,100,40,10);
leaves.addImage (leavesImg);
leaves.x = Math.round(random(10,400));
leaves.scale = 0.08;
leaves.velocityY = 3;
leaves.depth = rabbit.depth;
rabbit.depth = rabbit.depth+1;
  } 
}