export default class Circle
{
    constructor ()
    {
        this.fill = false;
        this.stroke = "blue";
        this.strokeWeight = 1;
        this.radius = 20
        this.x = 50;
        this.y = 50;
    }

    resize(p)
    {
        this.radius = p.random(10,50);
    }

    move(p)
    {
        this.x = p.random(0, 100);
        this.y = p.random(0, 100);
    }

    draw(p)
    {
        if (this.fill)
            p.fill(this.fill);
        else
            p.noFill();
        
        p.stroke(this.stroke);
        p.strokeWeight(1);
        p.circle(this.x, this.y, this.radius);
    }
}