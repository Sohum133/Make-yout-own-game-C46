var box;
var database;


function preload(){

}



function setup(){
    createCanvas(500,500);
    box = createSprite(50,50,20,20);
    database = firebase.database();
}



function draw(){
    background("black");

    if(keyDown(RIGHT_ARROW)){
        box.x = box.x+5;
    }
    
    drawSprites();

}