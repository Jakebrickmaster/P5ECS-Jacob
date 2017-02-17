var txt;

function preload(){
    
    txt = loadStrings('Algor.txt');
}


function setup(){
    noCanvas();
    
 seed = select('#seed');
    
    button = select('#submit');
    output = select('#output');
    button.mousePressed(replacing);
    
}
var s ;
function replacing () {
     
    
    for(var i = 0; i < txt.length; i++){
        s += txt[i];
    }
   

    var r = /Super Saiyan Blue/g;
    
    var newstring = s.replace(r, Blue);
    console.log(newstring);
    createP(newstring);
    
    console.log(txt);
    
}



function Blue(){
    
   var r = /Super Saiyan Blue/g;
    //var randquote = txt;
    //console.log((Super Saiyan God Super Saiyan));
    
    var replacedname =  "Super Saiyan Blue(Super Saiyan God Super Saiyan)"; 
    
     //if(s.match(/Super Saiyan Blue(Super Saiyan God Super Saiyan)/))
        
        console.log(s);
     var saiyan = s.match(r);
    
    for (var i =0; i < saiyan.length; i++){
        var c = color('#0000ff');
        s.style('background-color', c);
        
    }
    
    return replacedname;
  
    
}

function highlight(){
    //span1.style('background-color', '#c91077');
    //console.log("this works!");
    console.log(this.html());
    this.html("Super Saiyan God Super Saiyan");
    var c = color('#0000ff');
    this.style('background-color', c);
    
    
}

