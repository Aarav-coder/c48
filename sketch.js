var player;
var gameState = "start";
var score = 0;


function preload(){
  wolfimg = loadImage("wolf.png");
  pantherimg = loadImage("panther.png");
  lionimg = loadImage("lion.png");
  dogimg = loadImage("dog.png");
  dinoimg = loadImage("dino.png");
  playerimg = loadImage("player.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
player = createSprite(displayWidth/8,displayHeight/3,50,50);
player.addImage(playerimg);
player.scale = 0.1;
wolf = createSprite(100,displayHeight-100);
wolf.addImage(wolfimg);
wolf.scale = 0.2;
lion = createSprite(displayWidth/2,displayHeight/2);
lion.addImage(lionimg);
lion.scale = 0.5;
dog = createSprite(displayWidth-100,displayHeight/6);
dog.addImage(dogimg);
panther = createSprite(100,displayHeight/10);
panther.addImage(pantherimg);
panther.scale = 0.2;
dino = createSprite(displayWidth-100,displayHeight-100);
dino.addImage(dinoimg);

edges = createEdgeSprites();
start = createButton('start');
start.position(displayWidth/2,displayHeight/2);

  coin1 = createSprite(400,70,20,20);
  coin2= createSprite(500,70,20,20);
  coin3 = createSprite(600,70,20,20);
  coin4= createSprite(700,70,20,20);
  coin5= createSprite(800,70,20,20);
  coin6= createSprite(900,70,20,20);
  coin7= createSprite(1000,70,20,20);
  coin8= createSprite(400,170,20,20);
  coin9= createSprite(500,170,20,20);
  coin10= createSprite(600,170,20,20);
  coin11 = createSprite(700,170,20,20);
  coin12= createSprite(800,170,20,20);
  coin13 = createSprite(900,170,20,20);
  coin14 = createSprite(1000,170,20,20);
  coin15 = createSprite(400,600,20,20);
  coin16 = createSprite(400,740,20,20);
  coin17 = createSprite(500,600,20,20);
  coin18 = createSprite(600,600,20,20);
  coin19 = createSprite(700,600,20,20);
  coin20 = createSprite(800,600,20,20);
  coin21 = createSprite(900,600,20,20);
  coin22 = createSprite(1000,600,20,20);
  coin23 = createSprite(500,740,20,20);
  coin24 = createSprite(600,740,20,20);
  coin25 = createSprite(700,740,20,20);
  coin26 = createSprite(800,740,20,20);
  coin27 = createSprite(900,740,20,20);
  coin28 = createSprite(1000,740,20,20);






wolf.setVelocity(2,3);
lion.setVelocity(2,3);
dog.setVelocity(2,3);
panther.setVelocity(2,3);
dino.setVelocity(2,3);

leftbutton = createButton('←');
rightbutton = createButton('→');
upbutton = createButton('↑');
downbutton = createButton('↓');
leftbutton.position(50,displayHeight-200);
rightbutton.position(100,displayHeight-200);
upbutton.position(75,displayHeight-225);
downbutton.position(75,displayHeight-175);
wall1 = createSprite(displayWidth/8,displayHeight/40,displayWidth/2,20);
wall2 = createSprite(displayWidth-200,displayHeight/40,displayWidth/2,20);
wall3 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall4 = createSprite(displayWidth/8,displayHeight/4,displayWidth/2,20);
wall5 = createSprite(displayWidth-200,displayHeight/4,displayWidth/2,20);
wall6 = createSprite(displayWidth/2,displayHeight/3+30,displayWidth/2+200,20);
wall7 = createSprite(displayWidth/8,displayHeight/3+130,displayWidth/2,20);
wall8 = createSprite(displayWidth-200,displayHeight/3+130,displayWidth/2,20);
wall9 = createSprite(displayWidth/2,displayHeight/2+110,displayWidth/2+200,20);
wall10 = createSprite(displayWidth/2,displayHeight-200,displayWidth/2+200,20);
//wall11 = createSprite(displayWidth/2,displayHeight/8,displayWidth/2+200,20);
wall12 = createSprite(displayWidth/8,displayHeight-50,displayWidth/2,20);
wall13 = createSprite(displayWidth-200,displayHeight-50,displayWidth/2,20);
wall14 = createSprite(10,displayHeight/6,20,displayHeight/3);
wall15 = createSprite(10,displayHeight-150,20,displayHeight/3);
wall16 = createSprite(displayWidth-10,displayHeight/6,20,displayHeight/3);
wall17 = createSprite(displayWidth-10,displayHeight-150,20,displayHeight/3);



}
function draw() {
  background(0); 

  
  upbutton.mousePressed(()=>{
  player.y = player.y-50;
  })
  downbutton.mousePressed(()=>{
  player.y = player.y+50;
  })
  leftbutton.mousePressed(()=>{
  player.x = player.x-50;
  })
  rightbutton.mousePressed(()=>{
  player.x = player.x+50;
  })

  wolf.bounceOff(edges[0]);
  panther.bounceOff(edges[0]);
  lion.bounceOff(edges[0]);
  dino.bounceOff(edges[0]);
  dog.bounceOff(edges[0]);
  
  wolf.bounceOff(edges[1]);
  panther.bounceOff(edges[1]);
  lion.bounceOff(edges[1]);
  dino.bounceOff(edges[1]);
  dog.bounceOff(edges[1]);
  
  wolf.bounceOff(edges[2]);
  panther.bounceOff(edges[2]);
  lion.bounceOff(edges[2]);
  dino.bounceOff(edges[2]);
  dog.bounceOff(edges[2]);
  
  wolf.bounceOff(edges[3]);
  panther.bounceOff(edges[3]);
  lion.bounceOff(edges[3]);
  dino.bounceOff(edges[3]);
  dog.bounceOff(edges[3]);
  
  dino.bounce(wolf);
  wolf.bounce(lion);
  panther.bounce(dog);
  dog.bounce(lion);

  panther.bounceOff(wall1);
  panther.bounceOff(wall2);
  panther.bounceOff(wall3);
  panther.bounceOff(wall4);
  panther.bounceOff(wall5);
  panther.bounceOff(wall6);
  panther.bounceOff(wall7);
  panther.bounceOff(wall8);
  panther.bounceOff(wall9);
  panther.bounceOff(wall10);
  //panther.bounceOff(wall11);
  panther.bounceOff(wall12);
  panther.bounceOff(wall13);
  panther.bounceOff(wall14);
  panther.bounceOff(wall15);
  panther.bounceOff(wall16);
  panther.bounceOff(wall17);
  
  wolf.bounceOff(wall1);
  wolf.bounceOff(wall2);
  wolf.bounceOff(wall3);
  wolf.bounceOff(wall4);
  wolf.bounceOff(wall5);
  wolf.bounceOff(wall6);
  wolf.bounceOff(wall7);
  wolf.bounceOff(wall8);
  wolf.bounceOff(wall9);
  wolf.bounceOff(wall10);
  //wolf.bounceOff(wall11);
  wolf.bounceOff(wall12);
  wolf.bounceOff(wall13);
  wolf.bounceOff(wall14);
  wolf.bounceOff(wall15);
  wolf.bounceOff(wall16);
  wolf.bounceOff(wall17);
  
  dino.bounceOff(wall1);
  dino.bounceOff(wall2);
  dino.bounceOff(wall3);
  dino.bounceOff(wall4);
  dino.bounceOff(wall5);
  dino.bounceOff(wall6);
  dino.bounceOff(wall7);
  dino.bounceOff(wall8);
  dino.bounceOff(wall9);
  dino.bounceOff(wall10);
  //dino.bounceOff(wall11);
  dino.bounceOff(wall12);
  dino.bounceOff(wall13);
  dino.bounceOff(wall14);
  dino.bounceOff(wall15);
  dino.bounceOff(wall16);
  dino.bounceOff(wall17);
  
  dog.bounceOff(wall1);
  dog.bounceOff(wall2);
  dog.bounceOff(wall3);
  dog.bounceOff(wall4);
  dog.bounceOff(wall5);
  dog.bounceOff(wall6);
  dog.bounceOff(wall7);
  dog.bounceOff(wall8);
  dog.bounceOff(wall9);
  dog.bounceOff(wall10);
  //dog.bounceOff(wall11);
  dog.bounceOff(wall12);
  dog.bounceOff(wall13);
  dog.bounceOff(wall14);
  dog.bounceOff(wall15);
  dog.bounceOff(wall16);
  dog.bounceOff(wall17);
  
  lion.bounceOff(wall1);
  lion.bounceOff(wall2);
  lion.bounceOff(wall3);
  lion.bounceOff(wall4);
  lion.bounceOff(wall5);
  lion.bounceOff(wall6);
  lion.bounceOff(wall7);
  lion.bounceOff(wall8);
  lion.bounceOff(wall9);
  lion.bounceOff(wall10);
  //lion.bounceOff(wall11);
  lion.bounceOff(wall12);
  lion.bounceOff(wall13);
  lion.bounceOff(wall14);
  lion.bounceOff(wall15);
  lion.bounceOff(wall16);
  lion.bounceOff(wall17);



if(gameState === "start"){
  text("Avoid Animals Use Tunnels To Collect The Treasure",displayWidth/2,displayHeight/2);
  text("Use Buttons To Move The Player",displayWidth/2,displayHeight/3);
  start.mousePressed(()=>{
    start.hide();
    gameState = "play";

  })
}
else if(gameState === "play"){
  if(player.x<0){
    player.x = displayWidth-player.width;
  }
  if(player.x>displayWidth){
    player.x = player.width;
  }
  if(player.y<0){
    player.y = displayHeight-player.height;
  }
  if(player.y>displayHeight){
    player.y = player.height;
  }
  
  
  
  if(player.isTouching(coin1)){
    coin1.destroy();
  }
  if(player.isTouching(coin2)){
    coin2.destroy();
  }
  if(player.isTouching(coin3)){
    coin3.destroy();
  }
  if(player.isTouching(coin4)){
    coin4.destroy();
  }
  if(player.isTouching(coin5)){
    coin5.destroy();
  }
  if(player.isTouching(coin6)){
    coin6.destroy();
  }
  if(player.isTouching(coin7)){
    coin7.destroy();
  }
  if(player.isTouching(coin8)){
    coin8.destroy();
  }
  if(player.isTouching(coin9)){
    coin9.destroy();
  }
  if(player.isTouching(coin10)){
    coin10.destroy();
  }
  if(player.isTouching(coin11)){
    coin11.destroy();
  }
  if(player.isTouching(coin12)){
    coin12.destroy();
  }
  if(player.isTouching(coin13)){
    coin13.destroy();
  }
  if(player.isTouching(coin14)){
    coin14.destroy();
  }
  if(player.isTouching(coin15)){
    coin15.destroy();
  }
  if(player.isTouching(coin16)){
    coin16.destroy();
  }
  if(player.isTouching(coin17)){
    coin17.destroy();
  }
  if(player.isTouching(coin18)){
    coin18.destroy();
  }
  if(player.isTouching(coin19)){
    coin19.destroy();
  }
  if(player.isTouching(coin20)){
    coin20.destroy();
  }
  if(player.isTouching(coin21)){
    coin21.destroy();
  }
  if(player.isTouching(coin22)){
    coin22.destroy();
  }
  if(player.isTouching(coin23)){
    coin23.destroy();
  }
  if(player.isTouching(coin24)){
    coin24.destroy();
  }
  if(player.isTouching(coin25)){
    coin25.destroy();
  }
  if(player.isTouching(coin26)){
    coin26.destroy();
  }
  if(player.isTouching(coin27)){
    coin27.destroy();
  }
  if(player.isTouching(coin28)){
    coin28.destroy();
  }

  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  //player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  
  

if(player.collide(wolf) || player.collide(lion) || player.collide(panther) || player.collide(dog) || player.collide(dino)   ){
 gameState = "end";
}
}
else if(gameState === "end"){
  gameover = createSprite(displayWidth/2,displayHeight/2);
  restart = createSprite(displayWidth/2,displayHeight/3);
  if(mousePressedOver("restart")){
    gameState = "start";
    score = 0;
    start.show();
    gameover.destroy();
    restart.destroy();
  }
}
  drawSprites();
  fill(255);
  text("score"+ score,displayWidth-100,displayHeight/16);

}
