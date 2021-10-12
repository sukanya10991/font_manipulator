difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(400, 350);
    canvas.position(700, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);


        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("left wrist x=" + leftwristX + "right wrist x" + rightwristX + "difference=" + difference);
    }
}

function draw() {
    background('grey');
    document.getElementById("text_size").innerHTML = "Font size of the text will be " + difference + "px";
    fill('white');
    textSize(difference);
    text('BLACKPINK', 40, 500);
}

function modelLoaded() {
    console.log('PoseNet is Initialised !');
}