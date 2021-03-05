class paper
{
	constructor(x,y)
	{
        var option={
            restitutiion: 0.5,
            friction:0.9,
            isStatic: false,
            density: 0.1
		}
		this.body=Bodies.circle(x,y,50,option)
		this.radius=50;
		this.image=loadImage("paper.png")
		World.add(world, this.body)
	}
	display()
	{
		push()
		translate(this.body.position.x,this.body.position.y);
		rotate(this.body.angle)
		imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
	    pop()
	}

}