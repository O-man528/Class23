class Box{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 0.8
        }
    
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }

    display(){
     rectMode(CENTER);
     var angle = this.box.angle;
     push();
     translate(this.box.position.x,this.box.position.y);
     rotate(angle);
     fill('blue');
     rect(0,0, this.width, this.height);
     pop();
    }
}