var txt;

function preload(){
    
    txt = loadStrings('Algor.txt');
}


function setup(){
    noCanvas();
    
 seed = select('#seed');
    
    button = select('#submit');
    output = select('#output');
    button.mousePressed(interactor);
    
}
var s ;
function replacing () {
     
    
    for(var i = 0; i < txt.length; i++){
        s += txt[i];
    }
   

    var r = /Super Saiyan Blue/g;
    
    var newstring = s.replace(r, Blue);
    console.log(newstring);
      var help =createSpan(newstring);
     
    
    console.log(txt);
    
}



function Blue(){
    
   
    //var randquote = txt;
    //console.log((Super Saiyan God Super Saiyan));
    
    var replacedname =  "Super Saiyan God Super Saiyan"; 

   
    return replacedname;
    

      //if(s.match(/Super Saiyan Blue(Super Saiyan God Super Saiyan)/))
}

function interactor(){
    //seed value
    for(var i = 0; i < txt.length; i++){
        s += txt[i];
    }
    //a delimiter
    var word = s.split(/(Super Saiyan Blue)/);
    //array
    console.log(word);
    
    //loop that repeats for however long our array is and create a span for each word.
    
    for(var i = 0; i < word.length; i++){
      //createP("This is a test");  
    //createSpan(word[i]);
        //createSpan(' ');
        var span1 = createSpan(word[i]);
        span1.parent(output);
        
        //var span2 = createSpan(' ');
        //span2.parent(output);
        
        if(/Super Saiyan Blue/.test(word[i])){
        
        span1.mouseOver(highlight);
        }
        
    
        
    }
    
}
 

function highlight(){
    //span1.style('background-color', '#c91077');
    //console.log("this works!");
    console.log(this.html());
    this.html("Super Saiyan God Super Saiyan")
    if(this.html("Super Saiyan God Super Saiyan")){
    var c = color('#0000ff');
    this.style('background-color', c);
    }
    
}

