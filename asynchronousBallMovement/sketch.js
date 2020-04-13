var ball;
var positon,database;
var gamestate=0;
var playercount;
var form,player,game;
var allplayers;
var cars, car1, car2, car3, car4;
var distance=0
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}
function setup(){
  createCanvas(1200,1200);
    database=firebase.database()
  game=new Game()
  game.getstate()
  game.start()

    
}

function draw(){
   if (playercount===4){
     game.update(1)
   }
   if(gamestate===1){
     clear()
     game.play()
   }
}


