//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball;
var b1

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  var options={
    isStatic:true,
  }
  ball=Bodies.rectangle(100,390,600,20,options);
  World.add(myWorld,ball);
  console.log(ball.position.x);
  b1=Bodies.circle(200,200,20)
  World.add(myWorld,b1);
}

function draw() {
  background("blue");
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,600,20) ; 
ellipseMode(RADIUS)
ellipse(b1.position.x,b1.position.y,20,20)

  drawSprites();
}