class Rope{
    constructor(Body1,point2){
        var options={
            bodyA:Body1,pointB:point2,length:220,stiffness:1,angularStiffness:2

        }
        this.pointB=point2
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        stroke("red")
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}