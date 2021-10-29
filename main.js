songHarryPotter="";
songPeterPan="";


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    songHarryPotter = loadSound("music Hp.mp3");
    songPeterPan = loadSound("music PETER PAN.mp3")
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}