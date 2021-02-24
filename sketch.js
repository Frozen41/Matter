
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj1 = new Roof(0,200, 10,10);
	bobObj1=new Bob(0,650);
	bobObj2=new Bob(200,650);
	bobObj3=new Bob(400,650);
	bobObj4=new Bob(600,650);
	bobObj5=new Bob(800,650);
	bobDiameter = 20
    rope1 = new Rope(bobObj1.body, roofObj1.body, - bobDiameter*2,0)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("MediumSpringGreen");
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  drawSprites();
 
}



