var bullet1 , thickness1;
var speed1,weight1;
//var bullet2,thickness2;
//var speed2, weight2;
function setup() {
  createCanvas(800,400);
    bullet1=  createSprite(100,70, 20, 20);
    speed1=random(225,300);
    weight1=random(32,52);
    bullet1.shapeColour("blue");

   // bullet2=createSprite(100,225,20,20);
   // speed2=random(227,400);
   // weight2=random(32,52);
   // bullet2.shapecolour("yellow");


    
    wall=createSprite(1200,200,thickness,heigth/2);
    thickness=random(22,83);
    

}

function draw() {
  background(255,255,255); 
 // bulletGroup=CreateGroup();
  //wallGroup=CreateGroup();

  if(hascollided(bullet1,wall)){
    bullet1.velocityX=0;
     var damage= 0.5 * weightt * speed* speed/(thickness*thickness*thickness);
     if(danage>10)
     {
       wall.shapeColour(255,0,0);
     }
     if(damage<10){
      wall.shapeColour(0,255,0);

     }
  }
  hascollided();
  drawSprites();
}

function hascollided(bullet1,wall){
  bullet1RightEdge=bullet1.x+bullet1.width;
  wall.leftEdge=wall.x;
  
  
  if(bulletRightEdge>=wallLeftEdge){

return true;
   
  }
return false;




}