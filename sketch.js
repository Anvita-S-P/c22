const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEngine,myWorld,ground,ball;












function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var options={
  isStatic:true
  }

  ground=Bodies.rectangle(600,590,1200,20,options);
  World.add(myWorld,ground);
 var ball_options={
   restitution:1.0
 }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);

}

function draw() {
  background(0); 
  
  
  Engine.update(myEngine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,1200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();

}