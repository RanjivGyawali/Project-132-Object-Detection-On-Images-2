Status = "";
Chair_image = "";

function preload(){
    Chair_image = loadImage("Chair.jpg");
}

function setup(){
    canvas = createCanvas(340,350);
    canvas.position(450,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Chair_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Chair_image,0,0,340,350);
}