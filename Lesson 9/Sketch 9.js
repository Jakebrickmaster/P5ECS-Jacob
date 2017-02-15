function setup(){
    noCanvas();
    seed = select('#seed');
    output = select('#output');
    
    submit = select('#submit');
    submit.mousePressed(interactor);
    
   
}

function interactor(){
    //seed value
    var s = seed.value();
    //a delimiter
    var word = s.split(/\W+/);
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
    
        if(!/\W+/.test(word[i])){
        
        span1.mouseOver(highlight);
        }
        
    
        
    }
    
}

function highlight(){
    //span1.style('background-color', '#c91077');
    //console.log("this works!");
    console.log(this.html());
    this.html("AMERICA");
    var c = color(random(255),random(255),random(255));
    this.style('background-color', c);
    
    
}