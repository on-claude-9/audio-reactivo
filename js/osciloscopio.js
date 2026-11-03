let mic, song;
let amplitude;
let fft;

async function setup()
{
    song = await loadSound("../audio/suzuki.mp3");
    createCanvas(windowWidth, windowHeight);
    //mic = new p5.AudioIn();

    fft = new p5.FFT(32);
    fft.setInput(song);

    stroke(0);
    noFill();
}

function draw ()
{
    background(255, 255, 255, 50);

    const waveform = fft.waveform();

    beginShape();
    for(let i = 0; i < waveform.length; i++)
    {
        let x = map(i, 0, waveform.length - 1, 0, width);
        let y = map(waveform[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();
}

async function mousePressed()
{
    if (!song) return false;

    song.play();
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}