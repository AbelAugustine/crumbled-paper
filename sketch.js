
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var paperObject, groundObject, dustbinObject;



function setup() {
	createCanvas(1600, 700);
  
	
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  
  paperObject = new Paper(200,450,40);
  dustbinObject= new Dustbin(1200,650);
  groundObject=new Ground(width/2,670,width,20);

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paperObject.display();
dustbinObject.display();
groundObject.display();
  
  drawSprites();
 
}

function KeyPressed () {
    if(KeyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


