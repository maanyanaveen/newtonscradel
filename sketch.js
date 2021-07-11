const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball2;
var ball3;
var ball4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
		restsitution:0.8
	}

	var ball2_options={
		restsitution:0.8
	}

	var ball3_options={
		restsitution:0.8
	}

	var ball4_options={
		restsitution:0.8
	}

	ball = Bodies.circle(400,300,20,ball_options);
    World.add(world,ball);

	ball2 = Bodies.circle(400,300,20,ball2_options);
    World.add(world,ball2);


	ball3 = Bodies.circle(400,300,20,ball3_options);
    World.add(world,ball3);

	ball4 = Bodies.circle(400,300,20,ball4_options);
    World.add(world,ball4);


	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);

	

	con2 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con2);
	
	con3 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con3);


	con4 = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con4);
	
	
		


	


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}




function draw() {
  rectMode(CENTER);
  background("#99004d");
  
  rect(roof.position.x,roof.position.y,230,20);
  circle(ball.position.x,ball.position.y,20);
  circle(ball2.position.x,ball2.position.y,20);
  circle(ball3.position.x,ball3.position.y,20);
  circle(ball4.position.x,ball4.position.y,20);
  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  
  pop();
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0005,y:0});
    }
}




function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.00005,y:0});
    }
}


function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.00005,y:0});
    }
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball4,{x:0,y:0},{x:0.00005,y:0});
    }
}