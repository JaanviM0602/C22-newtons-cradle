class rope{
	constructor(body1, body2, offsetX)
	{

		var options={
			bodyA:body1,
			bodyB:body2,

		}
	//create rope constraint here
	this.rope = Constraint.create(options);
	World.add(world,this.rope)
	this.offsetX = offsetX
		
	}


    //create display() here 
	display() {
		var posA = this.rope.bodyA.position;
		var posB = this.rope.bodyB.position;
		strokeWeight(3);
		line(posA.x, posA.y, posB.x + this.offsetX, posB.y);

	}

}
