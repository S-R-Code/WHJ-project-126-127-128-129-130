songHarryPotter="";
songPeterPan="";
leftWristX = "";
rightWristX = "";
leftWristY = "";
rightWristY = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
songStatus = "" ;


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose' , gotPoses ); 

}

function modelLoaded() {
    console.log("Posenet is Initailized");
} 

function preload(){
    songHarryPotter = loadSound("music Hp.mp3");
    songPeterPan = loadSound("music PETER PAN.mp3")
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}

function gotPoses(results){

    if(results.length > 0 ){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        console.log( "leftWristX =  " + leftWristX  ,  "leftWristY = " + leftWristY  );

        rightWristX = results[0].pose.rightWrist.x;

        rightWristY = results[0].pose.rightWrist.y;
        
        console.log( "rightWristX =" + rightWristX ,   "  rightWristY =" + rightWristY);
    }

} 