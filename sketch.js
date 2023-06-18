var player;
var fondo;
var cloud;
var ground;
var platform;
var lineas;
var playerJump;
var groundSprite;
var playerSprite;
var lineasSprite;
var groundInvisible;

function preload(){
  player = loadImage("./sprites juego/player.png");
  fondo = loadImage("./sprites juego/background.png");
  cloud = loadImage("./sprites juego/cloud.png");
  ground = loadImage("./sprites juego/ground.png");
  platform = loadImage("./sprites juego/platform.png");
  lineas = loadImage("./sprites juego/screen.png");
  playerJump = loadImage("./sprites juego/player Jump.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  groundSprite = createSprite(0,height,width-100, 40);
  groundSprite.addImage(ground);
  groundSprite.scale= 2.0

  groundInvisible = createSprite(width/3,height-40,width-500,120);
  groundInvisible.visible = false;

  playerSprite = createSprite(70,height-155,50,50);
  playerSprite.addImage("player",player);
  playerSprite.addImage("Jump",playerJump);

  lineasSprite = createSprite(width/2, height/2, width, height);
  lineasSprite.addImage(lineas);
  lineasSprite.scale= 3.0

  obstacle = createSprite(width-200,height-500,50,50);
  obstacle.addImage (platform);
  
  platformInvisible = createSprite(width-200,height-480,300,50);
  platformInvisible.visible = false;
  playerSprite.setCollider("rectangle",0,0,200,200);
  playerSprite.debug = true;
}

function draw() {
  background(fondo);
  //image(fondo,0,0,width,height)
 //groundSprite.velocityX = -5
  if (keyDown("d") ){
    playerSprite.x = playerSprite.x+20;
  }
  if (keyDown("a")){
    playerSprite.x = playerSprite.x-20;
  }
  if (keyDown("space")){
    playerSprite.velocityY =-10;
  }

  playerSprite.velocityY = playerSprite.velocityY+0.5;

  playerSprite.collide(groundInvisible);
  playerSprite.collide(platformInvisible);

  if (playerSprite.x >= width-100) {
    groundSprite.destroy();
    groundInvisible.destroy();
    obstacle.destroy();
    platformInvisible.destroy();
    aleatorio = Math.round(random(width-500,width+500));
    groundSprite = createSprite(aleatorio,height,width-100, 40);
    groundSprite.addImage(ground);
    groundSprite.scale= 2.0
    groundInvisible = createSprite(aleatorio,height-40,width-500,120);
    //groundInvisible = createSprite(width/3,height-40,width-500,120);
    //groundInvisible.visible = false;
    playerSprite.x = width-width; 
    rand = Math.round(random(width-1100,width-200));
    obstacle = createSprite(rand,height-500,50,50);
    obstacle.addImage (platform);
    platformInvisible = createSprite(rand,height-480,300,50);
  }
  
  drawSprites();
}

  

