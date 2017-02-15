var txt;

function preload(){
    
    txt = loadStrings('Algor.txt');
}


function setup(){
    noCanvas();
    
 seed = select('#seed');
    
    button = select('#submit');
    button.mousePressed(replacing);
    
}

function replacing () {
     var s ;
    
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
    
    
    //var randquote = txt;
    //console.log((Super Saiyan God Super Saiyan));
    
    var replacedname =  "Super Saiyan God Super Saiyan" 
    
    
    return replacedname;
    var span1 = createSpan(i);
        span1.parent(output);
     var word = replacedname.split(/Super Saiyan God Super Saiyan/);
    
    if(/Super Saiyan God Super Saiyan/.test(word[i])){
        
        span1.mouseOver(highlight);
        }
    
}

function highlight(){
    //span1.style('background-color', '#c91077');
    //console.log("this works!");
    console.log(this.html());
    var c = color('background-color', '#0000ff');
    this.style('background-color', c);
    
    
}
