/*
Synchronous:


function preload(){
var items = loadJSON("items.json");
}


Asynchronous: 
loadJSON("items.json", gotData)

function gotData(data){

DO STUFF HERE WHEN LOADED
}

*/




function setup(){
    createCanvas(200,200);
    background(0)
    loadJSON("http://api.open-notify.org/astros.json", gotData);
    
    
}


function gotData(data){
    console.log(data);
    for(var i = 0; i < data.people.length; i++){
        ellipse(random(width), random(height), 16, 16);
    }
}