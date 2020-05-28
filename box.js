function Box(x,y,r )
{


var options={
	friction:0,
	restitution :1
}
this.body=Bodies.circle(x,y,r,options);


this.r=r; 
World.add(world, this.body); 

this.show=function(){
var pos=this.body.position;
var angle =this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(1);
stroke(255);
fill(0,0,51);
circle(0,0, this.r);
pop();
}
}

	
	

