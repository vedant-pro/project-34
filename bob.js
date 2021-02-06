class Bob{
    constructor(x,y,color){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            frictionAir:0.01
             
        }
        this.Body=Bodies.circle(x,y,40,options)
        World.add(world,this.Body)
        this.r=40
        this.color=color
    }
    display(){
        var pos=this.Body.position
        var angle=this.Body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}