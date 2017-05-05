var forestGreen = '#0b542d';
var magenta = "#703040";
var greyBlue = "#00c2d6";
var greyYellow ="#7E827A";
var pastelOrange = "#E3CDA4";
var lightRed = "#C77966";
var skyBlue = "#286291";
var black = "#000";
var white = "#fff";

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/1.5);
  canvas.parent("myContainer");
  background('#000');
  strokeWeight(0.01);
  frameRate(24);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var w = random(width); //random X
    var h = random(height); //random Y
    var start = round(random(height));
    var end = round(random(width));

    var colorList = [magenta, pastelOrange, lightRed, black, black, black, white]; //color list
    var c = round(random(colorList.length-1));// select random color
    
    stroke(colorList[c]); //set fill color
    line( start, w, end, h);//draw line
    smooth(); //just smooth
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight/1.5);
}