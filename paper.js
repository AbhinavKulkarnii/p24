class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0,
          density: 1.2
      }
      this.image = loadImage("paper.png")
      this.r = r;
      this.body = Bodies.circle(x,y,(this.r-20)/2,options);
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0, this.r, this.r);
      pop()
    }
  };
