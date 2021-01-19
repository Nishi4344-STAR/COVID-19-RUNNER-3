var doctor1;
var doctor;
var covid19;
var covid191;
var medicalKits1;
var medicalKits;
var PPEKits;
var PPEKits1;
var backgroundImg;
var form;
var game;
var playerCount;
var gameState=0;
var database;
var player;

function preload(){
backgroundImg = loadImage("images/background.JPEG")
covid191 = loadImage("images/Covid-19.png")
doctor1 = loadImage("images/doctor.png")
medicalKits1 = loadImage("images/medical kit.png")

}

function setup(){
createCanvas(displayWidth-50,displayHeight-150)
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
background(backgroundImg)
}

function keyPressed(){
    if(keyCode ===37 ){
    doctor.velocityX=-1
    doctor.velocityY=0
    }
    if(keyCode ===39){
    doctor.velocityX=1
    doctor.velocityY=0

    }
    if(keyCode ===38 ){
    doctor.velocityY=-2
    doctor.velocityX=0

    }

    if(keyCode === 65){
        covid19.velocityX=-1
        covid19.velocityY=0
        }
        if(keyCode === 68){
        covid19.velocityX=1
        covid19.velocityY=0
    
        }
        if(keyCode ===87 ){
        covid19.velocityY=-2
        covid19.velocityX=0
    
        }
    

    if(keyCode === 32){
       medicalKits = createSprite(250,450);
       medicalKits.addImage (medicalKits1);
       medicalKits.x = doctor.x;
       medicalKits.lifetime = 200;
    }
       
    
}