class ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.body=Bodies.rectangle(width/2,height-30,width,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,width,20);
			pop()
			
	}

}