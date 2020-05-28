function Boundary(x,y,w,h,a )
{
var options=
{
friction :0.3,
restitution : 1,
isStatic : true,
angle:a
}
this.w=w;
this.h=h; 
this.body=Bodies.rectangle(x,y,w,h,options);

World.add(world, this.body); 

this.show=function(){
var pos=this.body.position;
var angle =this.body.angle;

push();

translate(pos.x, pos.y);

rectMode(CENTER);
strokeWeight(3);
rotate(angle);
stroke(255);
fill(0);
rect(0,0, this.w,this.h);

pop();
}

}