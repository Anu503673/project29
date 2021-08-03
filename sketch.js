const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, platform;
var polygon1,Slingshot;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(540,300,1200,20);

  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  block10 = new Block(280,275,30,40);
  block11 = new Block(310,275,30,40);
  block12 = new Block(340,275,30,40);
  block13 = new Block(370,275,30,40);
  block14 = new Block(400,275,30,40);
  block15 = new Block(430,275,30,40);
  block16 = new Block(460,275,30,40);
  block17 = new Block(490,275,30,40);
  block18 = new Block(510,275,30,40);
  block19 = new Block(540,275,30,40);

  polygon1= new polygon(100,100);

  Slingshot = new SlingShot(polygon1.body,{x:100, y:100});

}

function draw() {
  background(255,255,255); 

  block1.display(); 
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 
  block8.display(); 
  block9.display();

  block10.display();
  block11.display(); 
  block12.display(); 
  block13.display(); 
  block14.display(); 
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 
  block19.display();
  polygon1.display();
  Slingshot.display();
  
  platform.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}
