var ground,groundImage
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,5,5)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 ground=createSprite(300,180,600,10)
 ground.addImage(groundImage)
 ground.velocityX=-10
}

function draw(){
  background("white")
  if (keyDown("space")){
    trex.velocityY=-10
  
  }
  if (ground.x<0){
    ground.x=300
  }
  trex.velocityY+=0.5
trex.collide(ground)
  drawSprites()

}
