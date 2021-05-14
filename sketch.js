var canvas;
var music;
var fixedRect1,fixedRect2,fixedRect3,fixedRect4;
var movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
fixedRect1=createSprite(700,550,200,30);
fixedRect1.shapeColor="green";

fixedRect2=createSprite(490,550,200,30);
fixedRect2.shapeColor="blue";

fixedRect3=createSprite(280,550,200,30);
fixedRect3.shapeColor="orange";

fixedRect4=createSprite(70,550,200,30);
fixedRect4.shapeColor="red";

    //create box sprite and give velocity
movingRect=createSprite(400,300,30,30);
movingRect.shapeColor="white";
movingRect.velocityX=4;
movingRect.velocityY=4;
}

function draw() {
    music.play();
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();

movingRect.bounceOff(edges);
//movingRect.bounceOff(fixedRect1);
//movingRect.bounceOff(fixedRect2);
//movingRect.bounceOff(fixedRect3);
//movingRect.bounceOff(fixedRect4);


//add condition to check if box touching surface and make it box
if(fixedRect1.isTouching(movingRect)&&movingRect.bounceOff(fixedRect1)){
    movingRect.shapeColor="green";
    music.play();
}
if(fixedRect2.isTouching(movingRect)&&movingRect.bounceOff(fixedRect2)){
    movingRect.shapeColor="blue";
    music.play();
}
if(fixedRect3.isTouching(movingRect)&&movingRect.bounceOff(fixedRect3)){
    movingRect.shapeColor="orange";
}
if(fixedRect4.isTouching(movingRect)&&movingRect.bounceOff(fixedRect4)){
    movingRect.shapeColor="red";
    music.play();
}
if(fixedRect3.isTouching(movingRect)){
    movingRect.shapeColor="orange";
    movingRect.velocity=0;
    music.stop();
}
    drawSprites();
}
