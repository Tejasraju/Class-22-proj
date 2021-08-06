var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1 = createSprite(0,580,360,30);
block2 = createSprite(295,580,360,30);
block3 = createSprite(515,580,360,30);
block4 = createSprite(740,580,360,30);

block1.shapeColor = "blue";
block2.shapeColor = "orange";
block3.shapeColor = "red";
block4.shapeColor = "purple";

ball = createSprite(random(20,750),100,40,40);

ball.shapeColor = "white";

ball.velocityX = 4;
ball.velocityY = 9;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
background("yellow")
edges = createEdgeSprites();
ball .bounceOff(edges);

if(block1.isTouching(ball) &&ball.bounceOff(block1)){
ball.shapeColor = "blue"
}

if(block2.isTouching(ball) &&ball.bounceOff(block2)){
    ball.shapeColor = "orange"
    }

    if(block3.isTouching(ball) &&ball.bounceOff(block3)){
        ball.shapeColor = "red"
        }

        if(block4.isTouching(ball) &&ball.bounceOff(block4)){
            ball.shapeColor = "purple"
            }

            drawSprites();
    //add condition to check if box touching surface and make it box
}
