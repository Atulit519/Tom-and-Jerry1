//sprite variables
var tom, jerry, garden;

//animation and image variables;
var tomSitting, tomWalking, tomStill;
var jerryTeasing, jerryMagnifying;
var gardenImg;

function preload(){
    //loading the images and animations
    tomWalking = loadAnimation("cat2.png", "cat3.png");
    jerryTeasing = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png");
    tomSitting = loadImage("cat1.png");
    tomStill = loadImage("cat4.png");
    jerryMagnifying = loadImage("mouse4.png");
    gardenImg = loadImage("garden.png");
    
}

function setup(){
    //creating canvas
    createCanvas(1000, 1000);

    //creating tom, garden and jerry sprites 
    garden = createSprite(400, 400, 800, 800);
    garden.addImage("garden", gardenImg);

    tom = createSprite(800, 600, 100, 100);
    tom.addAnimation("sitting", tomSitting);
    tom.scale = 0.1;
    tom.debug = true;
    tom.setCollider("rectangle", 0, 0, 900, 900);

    jerry = createSprite(200, 600, 100, 100);
    jerry.addAnimation("teasing", jerryTeasing);
    jerry.scale = 0.1;
    jerry.debug = true;
    jerry.setCollider("rectangle", 0, 0, 900, 900);

}

function draw(){
    //creating background
    background(255);

    //drawing sprites
    drawSprites();

    //calling keyPressed function
    keyPressed();

}


function keyPressed(){

  //moving and changing animations of tom
  if(keyDown("LEFT_ARROW")){
     tom.x = tom.x - 4;
     tom.addAnimation("walking", tomWalking);
     tom.changeAnimation("walking", tomWalking);

  }
  else if(keyDown("DOWN_ARROW")){
    tom.y = tom.y + 4;
    tom.addAnimation("walking", tomWalking);
    tom.changeAnimation("walking", tomWalking);

  }
  else if(keyDown("RIGHT_ARROW")){
    tom.x = tom.x + 4;
    tom.addAnimation("walking", tomWalking);
    tom.changeAnimation("walking", tomWalking);

  }
  else if(keyDown("UP_ARROW")){
    tom.y = tom.y - 4;
    tom.addAnimation("walking", tomWalking);
    tom.changeAnimation("walking", tomWalking);

  }

  if(tom.x - jerry.x < tom.width / 4 + jerry.width / 4 &&
    jerry.x - tom.x < tom.width / 4 + jerry.width / 4 &&
    jerry.y - tom.y < tom.height / 4 + jerry.height / 4 &&
    tom.y - jerry.y < tom.height / 4 + jerry.height / 4)
  {
     jerry.addAnimation("magnifying", jerryMagnifying);
     jerry.changeAnimation("magnifying", jerryMagnifying);
     tom.addAnimation("still", tomStill);
     tom.changeAnimation("still", tomStill);

  }
  else{
     jerry.changeAnimation("teasing", jerryTeasing);

  }

}
