class Box{
    constructor(x,y,width,height){
        var option={
            restitution:1,
            isStatic:true
          }
          this.width = width;
          this.height = height;
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
    }
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    angleMode(RADIANS);
    rectMode(CENTER);
    fill("white");
    rect(0,0,this.width,this.height);
    pop();
    }
    
    
    }