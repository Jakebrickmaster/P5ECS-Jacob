/*
Regex

var s = "hello";
s.indexOf(o);
s.length();
var s = "\d";
var r = /hello/;
var r = /\d/;
r.indexOf(ghdflgfd);
r.length();

r.test();

g = global;
i = insensitive (case);
*/

function setup(){
    noCanvas();
    
 seed = select('#seed');
    
    button = select('#submit');
    button.mousePressed(splitting);
    
}

function test (){
    var s = seed.value();
    var r = /[.\w]+@\w+(.com|.edu|org)/;
    createP(r.test(s));
    
}
 

function matching(){
    var s = seed.value();
    var r = /\d{3}-\d{4}/g;
    var matches = s.match(r);
    
    for(var i = 0; i < matches.length; i++){
        
        createP(matches[i]);
    }
}

/*
s.split(regex, string);
OR
s.split(regex, function);
*/




function splitting(){
    
    var s = seed.value();
    var r = /[.,!?\s]+/;
    
    var words = s.split(r);
    createP(words);
    
    for( var i = 0; i< words.length; i++){
        
        createP(words[i]);
    }    
    
}
