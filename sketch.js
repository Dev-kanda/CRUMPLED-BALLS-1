
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(400,600,800,20);
	box1=new Box(765,535,20,110);
box2=new Box(595,535,20,110);
box3=new Box(680,580,150,20);
paper=new Paper(100,580,10)

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyDown===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
		
	}
}



