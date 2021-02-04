var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
  music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces

    box1=createSprite(80,590,120,15);
    box1.shapeColor="blue";

    box2=createSprite(250,590,120,15);
    box2.shapeColor="orange";

    box3=createSprite(420,590,120,15);
    box3.shapeColor="maroon";

    box4=createSprite(610,590,120,15);
    box4.shapeColor="green";



    //create ball sprite and give velocity

    ball=createSprite(random(20,750),10,20,20);
    ball.velocityX=5;
    ball.velocityY=5;
    ball.shapeColor="white";
    

}

function draw() {
    background("grey");
    //create edgeSprite

    edges=createEdgeSprites();
    ball.bounceOff(edges);



    //add condition to check if box touching surface and make it box


if(box1.isTouching(ball) && ball.bounceOff(box1)){
  ball.shapeColor="blue";
  music.play();
}

if(box2.isTouching(ball)){
    ball.shapeColor="orange";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
  }

  if(box3.isTouching(ball) && ball.bounceOff(box3)){
    ball.shapeColor="maroon";
    
  }

  if(box4.isTouching(ball) && ball.bounceOff(box4)){
    ball.shapeColor="green";
    
  }

 
 







drawSprites();}
