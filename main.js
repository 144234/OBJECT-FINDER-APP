results=[];
status = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(480,380);
    video.hide();
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    results = results;
}
 
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log(" Model Loaded")
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
    if(results[i].label == status)
    {
        objectDetector.detect(video, gotResult);
        for(i = 0; i < results.length; i++) {
            document.getElementById("status").innerHTML = status + " Found"; 
 
            fill("#FF0000");
            percent = floor(results[i].confidence * 100);
            text(results[i].label + " " + percent + "%" , results[i].x + 15, results[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(results[i].x, results[i].y, results[i].width, results[i].height);
        }
    } 
    else(){
        document.getElementById("status").innerHTML = status + " Not Found"; 
    }
}