var txt;

function preload(){
    
    txt = loadStrings(Algor.txt);
}


function setup(){
    noCanvas();
    
 seed = select('#seed');
    
    button = select('#submit');
    button.mousePressed(replacing);
    
}

function replacing () {
    var s = seed.value();
    var r = /\b\w+\b/g;
    
    var newstring = s.replace(r, Blue);
    console.log(newstring);
    createP(newstring);
}

function randostring(match, group1) {
    
    if (match.length == 4){
        return match.toUpperCase();
        
    }
    else{
        return match;
    }
    
}


function Blue(match){
    
    
    //console.log(txt);
    
    var randquote = random(txt);
    console.log(randquote);
    
    var replacedname = "Donald " + randquote + " Trump";
    
    return replacedname;
}
