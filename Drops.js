class Drops
{
	constructor(x,y)
	{
		var options={
			
			restitution:0.3,
			friction:0.01,
			

			
			}
		this.x=x;
		this.y=y;
		this.r=10
		this.body=Bodies.circle(x,y,10, options)
		World.add(world, this.body);

    }
    rain(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
	show()
	{
			
			var pos=this.body.position;		

			
			
			ellipseMode(CENTER)
			strokeWeight(3);
			fill("pink")
			ellipse(pos.x, pos.y,this.r, this.r);
			
			
	}

}