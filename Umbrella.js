
class Umbrella
{
	constructor(x,y)
	{
        var options={

            isStatic:true
        }
	    this.x=x;
		this.y=y;
		this.r=50
		this.body=Bodies.circle(x,y,50,options)
		World.add(world, this.body);
         this.image=loadImage("Walking Frame/walking_1.png")
          
          
          
          
          
          
          
	}
	display()
	{
            var pos= this.body.position
            imageMode(CENTER)
            image(this.image,pos.x,pos.y,200,200)
			
       
    }

}





















