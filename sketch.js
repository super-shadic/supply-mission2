var helicopterIMG, helicopterSprite, package,packageIMG;
var packageBody,ground;
var zone1, zone2, zone3, zoneGroup;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zoneGroup - new Group;
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2; 

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	zone1=createSprite(300, 600, 20, 120);
	zone1.shapeColor = "red";
	zone2=createSprite(500, 600, 20, 120);
	zone2.shapeColor = "red";
	zone3=createSprite(400, 650, 200, 20);
	zone3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	package.x= packageBody.position.x 
	package.y= packageBody.position.y 
	package.collide(zone1);
	package.collide(zone2);
	package.collide(zone3);
	keyPressed();
	drawSprites();
 
}

function keyPressed() {
 if (keyDown ("DOWN_ARROW")) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	var package_options = {restitution: 1.5, isStatic: true}

    
	packageBody = Bodies.circle(width/2 , 300 , 10 , {restitution:0.7, isStatic:false});
	World.add(world, packageBody);
  }
}



