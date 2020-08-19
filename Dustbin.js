class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        //'restitution':0.2,
        //'friction':0.2,
        //'density':1.0
        
        //this.body = Bodies.rectangle(restitution:0.2,{isStatic:true});
    }
    this.body = Bodies.rectangle(x, y, 10, 10, options);
    this.width = width;
    this.height = height;
    this.image= loadImage("dustbin.png");

  this.body = Bodies.rectangle(x, y, 10 , 10,{isStatic:true} );
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    //var angle = this.body.angle;
    //push();
    translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    //pop();
  }
};
