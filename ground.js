class ground {

  constructor(x, y, width, height){

    var ground_options ={

        isStatic: true

    }

    this.ground = Bodies.rectangle(x, y, width, height, ground_options)
    World.add(world, this.ground)

    this.height = height
    this.width = width 

  }

  display() {

   var pos = this.ground.position

   rectMode(CENTER)

   rect(pos.x, pos.y, this.width, this.height) 

  }

}