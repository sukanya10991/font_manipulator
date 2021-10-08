function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 350);
    canvas.position(700, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('grey');
}

function modelLoaded() {
    console.log('PoseNet is Initialised !');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}