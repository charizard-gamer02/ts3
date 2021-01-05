const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";
var ground1,ground2,slingShot,engine,world,polyimg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box15,box16,poly;
var topBox1,topBox2,topBox3,topBox4,topBox5,topBox6,topBox7,topBox8,topBox9;
var score = 0;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
    world = engine.world;
    ground1=new Ground(400,650,400,20);
    box1=new Box(235,600,50,100);
    box2=new Box(290,600,50,100);
    box3=new Box(345,600,50,100);
    box4=new Box(400,600,50,100);
    box5=new Box(455,600,50,100);
    box6=new Box(510,600,50,100);
    box7=new Box(565,600,50,100);

    box8=new Box(290,490,50,100)
    box9=new Box(345,490,50,100)
    box11=new Box(400,490,50,100)
    box10=new Box(455,490,50,100)
    box12=new Box(510,490,50,100)

    box13=new Box(345,390,50,100)
    box14=new Box(400,390,50,100)
    box15=new Box(455,390,50,100)

    box16=new Box(400,290,50,100)

   ground2=new Ground(900,350,300,20)

    topBox1=new Box(790,250,50,100)
    topBox2=new Box(845,250,50,100)
    topBox3=new Box(900,250,50,100)
    topBox4=new Box(955,250,50,100)
    topBox5=new Box(1010,250,50,100)

    topBox6=new Box(845,140,50,100)
    topBox7=new Box(900,140,50,100)
    topBox8=new Box(955,140,50,100)

    topBox9=new Box(900,40,50,100)






poly=new Poly(100,350,100)
slingShot=new SlingShot(poly.body,{x:100,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey")
  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  topBox1.display();
  topBox2.display();
  topBox3.display();
  topBox4.display();
  topBox5.display();
  topBox6.display();
  topBox7.display();
  topBox8.display();
  topBox9.display();
  poly.display();
  slingShot.display();
  
  
  
 
  
  
  
  
  




  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&&gameState==="launched"){
     Matter.Body.setPosition(poly.body, {x: 100 , y: 350});

     slingShot.attach(poly.body);
    
     gameState="onSling"
  }
}
