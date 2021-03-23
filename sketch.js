var ball,ball1;
var database;
var loac,position;
var loca,position1;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";



    loac=database.ref('ball/position');
    loac.on("value",readPosition,showError);

    loca=database.ref('ball1/position1');
    loca.on("value",readPosition1,showError1);



}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }





    if(keyDown('a')){
        writePosition1(-1,0);
    }
    else if(keyDown('d')){
        writePosition1(1,0);
    }
    else if(keyDown('w')){
        writePosition1(0,-1);
    }
    else if(keyDown('s')){
        writePosition1(0,+1);
    }


    if(ball.isTouching(ball1))
    {

        text("GAME OVER",250,250);

    }



    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
    x :ball.x + x,
    y :ball.y + y
    })
}

function readPosition(data)
{
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
 
function showError()
{

}

function writePosition1(x,y){
    database.ref('ball1/position1').set({
    x :ball1.x + x,
    y :ball1.y + y
    })
}

function readPosition1(data)
{
    position1=data.val();
    ball1.x=position1.x;
    ball1.y=position1.y;
}
 
function showError1()
{

}
