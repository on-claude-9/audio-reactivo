import Circle from './components/circle.js';

const CIRCLE = new Circle();

new p5((p) => 
    {
    p.setup = () => 
    {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () =>
    {
        p.background(0);
    
        CIRCLE.draw(p);
        for (let i = 0; i < 10; i++)
        {
            CIRCLE.move(p);
            CIRCLE.draw(p);
        }
    }
});