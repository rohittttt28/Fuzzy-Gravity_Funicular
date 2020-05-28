var Engine = Matter.Engine;
   var Bodies = Matter.Bodies;
   var  World = Matter.World;

var engine;
  var world;
var boxes=[];
var boundaries=[];
var ground;

 function setup() {
  createCanvas(400, 400);
   engine = Engine.create();
  
 world=engine.world; 
   
	
	console.log(world);
    //Engine.run(engine);
	
	boundaries.push( new Boundary(0, 100, width, 10, 0.3));  
	boundaries.push( new Boundary(400, 200, width, 10, -0.35));
boundaries.push( new Boundary(0, 300, width, 10, 0.25));  
boundaries.push( new Boundary(0, height, width*2, 10, 0.0));  	
	
		
 }
		//World.add(world, ground);  

function mouseClicked() {
boxes.push (new Box(mouseX,mouseY,random(5,20))) ;
  
} 

function draw() {
  background(51);
  Engine.update(engine);
  for (var i=0;i<boxes.length;i++){
boxes[i].show();

  }
   for (var i=0;i<boundaries.length;i++){
boundaries[i].show();

  } 
 
} 