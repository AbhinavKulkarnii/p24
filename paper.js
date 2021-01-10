class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("brown");
      ellipse(0,0, this.r, this.r);
      pop()
    }
  };
