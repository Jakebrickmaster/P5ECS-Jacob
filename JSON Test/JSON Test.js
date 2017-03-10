// Link of JSON File: https://github.com/brandtg/trump-data/tree/master/data/2016_donald-trump/statements
var x;

function preload(){
    x = loadJSON("JSON Test.json", gotData);
}
function setup(){
    createCanvas(400, 400);
}


function gotData(data){
    console.log(data);
   
}


function draw(){
    background(0)
    text(x.date, 10, 50);
    text(x.title, 10, 60);
    text(x.text, 10, 70);
}