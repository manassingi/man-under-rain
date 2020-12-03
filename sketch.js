
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var thunder,umbrella,umbrellaimg;
var ti1,ti2,ti3,ti4;
var drops;
var maxdrops=100;
var maxrain=[]
function preload(){

ti1=loadImage("thunderbolt/1.png")
ti2=loadImage("thunderbolt/2.png")
ti3=loadImage("thunderbolt/3.png")
ti4=loadImage("thunderbolt/4.png")
}
 function setup(){
    createCanvas(500, 800);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    
    umbrella=new Umbrella(200,700,100,100)
   for(var i=0;i<maxdrops;i++){

    maxrain.push(new Drops(random(0,400),random(0,400)))
   }
   
   
	
     Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    rectMode(CENTER);
    background("gray");
    
    
    
    thunderbolt()
    drawSprites();
    for(var i=0;i<maxdrops;i++){
        maxrain[i].show()
        maxrain[i].rain()
    }
    umbrella.display()
    
    
}  
function thunderbolt(){
 if(frameCount % 100 === 0) {
    var thunder=createSprite(Math.round(random(50,450)),200,10,100);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: thunder.addImage(ti1);
              break;
      case 2: thunder.addImage(ti2);
              break;
      case 3: thunder.addImage(ti3);
              break;
      case 4: thunder.addImage(ti4);
              break;
      case 5: thunder.addImage(ti3);
              break;
      case 6: thunder.addImage(ti2);
              break;
      default: break;
    }
    thunder.lifetime = 80;
}
}