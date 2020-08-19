class Ball {
  constructor(x, y, radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.4
  
    }
    this.x= x;
    this.y= y;
    this.radius=radius;
    this.image=loadImage("Paperball.png")
    //this.body=Bodies.circle(this.x,this.y,this.radius,options);

    //this.body = Bodies.rectangle(x, y, width , height,{isStatic:true} );

    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //fill("purple");
    //strokeWeight(3);
    //stroke("purple");
    //ellipseMode(RADIUS);
    //ellipse(0,0,this.radius);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }
};