class Box{
    constructor(x,y,width,height) {
     this.body = Bodies.rectangle(x,y,width,height);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
}
    display(){
    var p=this.body.position;
    var a=this.body.angle;
    fill(0,0,0);
    push();
  translate(p.x,p.y);
  rotate(a);
  rectMode(CENTER);
  rect(0,0,this.width,this.height);
  pop();       
  }
  };