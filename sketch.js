const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ground;
var ball
var balls

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var options ={
    isStatic:true
    
  }
  var option ={
    restitution:1
  }
  ground = Bodies.rectangle(200,380,400,50,options)
  ball = Bodies.circle(200,200,20,option)
  balls = Bodies.circle(230,200,20,option)
  World.add(world,ground)
  World.add(world,ball)
  World.add(world,balls)
  console.log(ground)
  console.log(ground.position.x)
  console.log(ground.position.y)
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,50)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)
    ellipseMode(RADIUS)
    ellipse(balls.position.x,balls.position.y,20,20)
}