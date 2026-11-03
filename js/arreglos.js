const PALETA = ['#000000', '#FFFFFF', '#AAAAAA' ]
const RADIO = 500;
let freq = 0.02;
let offset = 0;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    background(PALETA[1]);

    noFill();
    strokeWeight(2);
    stroke(PALETA[0]);
}

function draw()
{
    background(PALETA[1]);

    for(let x = 0; x < width; x++)
    {
        let angle = (x * freq) + offset;
        let y = sin(angle) * RADIO + height / 2;

        rect(x, y, 1, 1);
    }

    offset += 0.1;
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}