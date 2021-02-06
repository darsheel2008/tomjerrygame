var tom,tomImg1,tomImg2,tomImg3,jerry,jerryImg1,jerryImg2,jerryImg3;
var garden,gardenImage;

function setup(){
   
   createCanvas(1000,800);
   
   tom = createSprite(870,600);
   tom.addAnimation("tomSleeping", tomImg1);
   tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addAnimation("jerryStanding", jerryImg1);
   jerry.scale = 0.15
 
   garden=createSprite(1000,800);
   garden.addImage(gardenImage);
}

function draw(){ 
    background(gardenImage);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
     tom.velocityX = 0;
     tom.addAnimation("tomLastImage", tomImg3); 
     tom.x = 300;
     tom.scale = 0.2;
     tom.changeAnimation("tomLastImage");

     jerry.addAnimation("jerryLastImage", jerryImg3);
     jerry.scale = 0.15;
     jerry.changeAnimation("jerryLastImage");
    }

drawSprites();
text(jerryX + ',' + jerryY,10, 45);
}


    function keyPressed(){
     if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning", tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryImg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
    }
}