
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1;
var bob1,bob2,bob3,bob4,bob5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(500,500,"red")
	bob2=new Bob(450,500,"blue")
	bob3=new Bob(400,500,"pink")
	bob4=new Bob(350,500,"green")
	bob5=new Bob(300,500,"yellow")
	rope1=new Rope(bob1.Body,{x:550,y:250})
	rope2=new Rope(bob2.Body,{x:480,y:250})
	rope3=new Rope(bob3.Body,{x:400,y:250})
	rope4=new Rope(bob4.Body,{x:320,y:250})
	rope5=new Rope(bob5.Body,{x:250,y:250})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob5.Body,{x:mouseX,y:mouseY})
}



