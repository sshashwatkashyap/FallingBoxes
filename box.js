class box {

constructor(x, y, width, height){
  
  var box_options ={

   'restitution':0.8,
   'friction':0.1,
   'density':1.0

  } 

  this.body = Bodies.rectangle(x, y, width, height, box_options)
  World.add(world, this.body) 

  this.width = width;
  this.height = height;

}

display (){

  var pos = this.body.position
  
  push()

  rectMode(CENTER)

  translate(pos.x, pos.y)

  rotate(this.body.angle)

  rect(0, 0, this.width, this.height);

  pop()

}
}