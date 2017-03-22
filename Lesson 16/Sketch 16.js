var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';
var issX;
var issY;

function setup(){
    createCanvas(600, 400);
    //loadJSON(url, gotData);
    
    setInterval(askSpace ,1000);
}

function askSpace(){
    loadJSON(url, gotData);
    
}


function gotData(Nick){
    print(Nick);
    var latitude = Nick.iss_position.latitude;
    var longitude = Nick.iss_position.longitude;
    print(latitude);
    print(longitude);
    
    issX = map(latitude, -55, -40, 0, width);
    issY = map(longitude, -80, -50, 0, height);
}

function draw(){
    background(51);
    fill(255)
    ellipse(issX, issY, 24, 24);
    stroke(255);
    line(lineX, 0, lineX, height);
    
    lineX = lineX + 5;
    if(lineX > width){
        
        lineX = 0;
    }
    
}