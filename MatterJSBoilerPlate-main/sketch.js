
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground1,ground2,ground3;
var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(400,690,799,20);
	ground2=new Ground(200,500,300,20);
    ground3=new Ground(600,500,300,20);
    ball1=new Ball(350,200,15);
	ball2=new Ball(360,200,15);
	ball3=new Ball(380,200,15);
    ball4=new Ball(400,200,15);
	ball5=new Ball(420,200,15);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background("lightGreen");
  ground1.show();
  ground2.show();
  ground3.show();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  Engine.update(engine)
  drawSprites();
 
}



