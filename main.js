status = "";
img = "";
object = [];
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Hamka KaCU PHARK NAHI PRDTA";
}
function modelLoaded() {
    console.log("modelLoaded");
    status = true;
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        object = results;
    }
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    if (status !="") {
        for ( i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "abhi kuch fhark nahi padta";
        fill("red");
        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%" , object[i].x, object[i].y);
        noFill();
        stroke("red");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);               
        }
    }
}