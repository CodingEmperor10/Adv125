noseX = 0;
noseY = 0;
difference = 0;
leftWristx = 0;
rightWristx = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);

}

function modelLoaded(){
    console.log("poseNet is here!");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log(" noseX = " + noseX +" noseY = " + noseY);

leftWristx = results[0].pose.leftWrist.x;
rightWristx = results[0].pose.rightWrist.x;
difference = floor(leftWristx - rightWristx);
console.log(" leftWrist = " + leftWristx + " rightWristx = " + rightWristx + " difference = "+ difference);
}
}

function draw()
{
background("#808080");
document.getElementById("side").innerHTML = " Sides of the square are = " + difference + " px";
fill("#87CEEB");
stroke("#F5F5F5");
square(noseX, noseY, difference);
}