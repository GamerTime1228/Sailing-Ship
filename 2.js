var seaImg 
var shipImg1

function preload(){
    seaImg = loadImage("sea.png");
    shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
      createCanvas(400,400);
    
      sea = createSprite(400,100,10,10);
      sea.addImage("sea", seaImg);
      sea.x = sea.width /2;
      sea.velocityX = -4;

      ship = createSprite(100,250,10,10);
      ship.addAnimation("ship", shipImg1)
      ship.scale = 0.2;


  if(sea.x < 0) {
      sea.x = sea.width / 2;
  }
}

function draw() {
      background("blue");
      drawSprites();
  }