var trex, trex_running, edges,sprite;
var groundImage;
var suelo;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")

}



function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
   sprite = createSprite(50,190,400,20);
   sprite.visible = false ;  
   trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    edges = createEdgeSprites();
    suelo = createSprite(200,180,400,20);
    suelo.velocityX = -2;
    suelo.addImage("ground2.png",groundImage);
    //agregar tamaño y posición al Trex
    trex.scale = 0.5;
    trex.x = 50
  }


function draw(){
    //establecer color de fondo.
    background("white");
    
    //cargar la posición Y del Trex
    console.log(trex.y)
  
    //hacer que el Trex salte al presionar la barra espaciadora
    if(keyWentDown("space" ) && trex.collide(sprite) ){
      trex.velocityY = -10;
    }
    
    trex.velocityY = trex.velocityY + 0.5;
    if (suelo.x < 0){       
    suelo.x =  suelo.width /2;
  }

  //evitar que el Trex caiga
  trex.collide(sprite);

  drawSprites();
}
