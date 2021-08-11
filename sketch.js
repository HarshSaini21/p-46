var story;
var bg, bg1, bg2;
var gameState = 0;
var hrithik, HrithikImg;
var gun, gunImg;
var zombie, zombieImg;
var shoot;
var bullet, bulletImg;
var gun1, gun1Img;

function preload(){
  bg = loadImage("bg.jpg");
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("bg2.jpg");
  HrithikImg = loadImage("boy.gif");
  gunImg = loadImage("gun.png");
  zombieImg = loadImage("zombie.gif");
  bulletImg = loadImage("bullet.png");
  gun1Img = loadImage("gun1.png");

}

function setup(){
  createCanvas(800, 400);

  story = new Story();

  shoot = new Shoot();

  Hrithik = createSprite(60, 250);
  Hrithik.addImage(HrithikImg);
  Hrithik.scale = 0.45;
  Hrithik.visible = false;

  gun = createSprite(Hrithik.x+80, Hrithik.y-10);
  gun.addImage(gunImg);
  gun.scale = 0.15;
  gun.visible = false;

  
}

function draw(){


  if(gameState === 0){
    background(bg);
  }

  if(gameState === 1){
    background(bg1);
  }

  if(gameState === 2){
    background(bg2);
    shoot.display();
    Hrithik.visible = true;
    gun.visible = true;
    spawnZombie();
    
  }

  story.display();
  

  drawSprites();
}

function spawnZombie(){
  if(frameCount% 120 === 0){
    zombie = createSprite(830, 220);
    zombie.y = Math.round(random(300, 260));
    zombie.addImage(zombieImg);
    zombie.scale = 0.25;
    zombie.velocityX = -3;
  }
}

function keyPressed(){
  if(keyCode === 32){
    gun.visible = false;
    gun1 = createSprite(160, 240);
    gun1.addImage(gun1Img);
    gun1.scale = 0.4;
    
  }
}
