var song;
var amplitude;

function preload()
{
    song = loadSound("../audio/something.mp3");
}

function setup ()
{
    createCanvas(windowWidth, windowHeight);
    amplitude = new p5.Amplitude();
    amplitude.setInput(song);
}

function mousePressed()
{
    song.play();
}

function draw ()
{
    const level = amplitude.getLevel();
    if (!amplitude) return;
    background(level * 50);
    console.log(level);
}