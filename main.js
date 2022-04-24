function preload() {
mus = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    canvas = createCanvas(301,299);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(301,299);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initialized");
   }
function gotPoses(results) {
    if (results.length > 0) {
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

    console.log("results");
    console.log("Nose-x = "+noseX);
    console.log("Nose-y = "+noseY);
    }
}
function draw(){
    image(video,0,0,301,299);
    image(mus, noseX ,noseY,25,25);
}
function ts(){
    save("saved.png");
}