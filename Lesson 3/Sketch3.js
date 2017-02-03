var textfield;
var output;
var submit;

/*
-indexof()
-substring()
-length()
-split
-join
*/
function setup(){
    noCanvas();
    textfield = select('#storyfield');
    output = select('#output');
    
    //Submit Button Setup
    submit = select('#submit');
    submit.mousePressed(instancechecker);
}



function newTyping(){
    var s = textfield.value();
    createP("The length of you story is " + s.length + " characters.");
    s.indexOf("e");
    createP(s.indexOf("e"));


var wordsearch = "puppy";
var theword = s.indexOf(wordsearch);
    createP("you can find the word " + wordsearch + " starting at " + theword);
   
    createP(s.indexOf("e",6));
    
    var newtxt = s.substring(8,11);    
    createP(newtxt);
    
    
    var newertext = s.substring(s.length/2, s.length);
    createP(newertext);
    
    
    var splitstory = split(s, " ");
    splitstory = splitstory.sort();
    s = join (splitstory, " ");
    createP(s);
}

//Challenge: create an algorithum that searches for more than one instance of a word.

function instancechecker(){
    var s = textfield.value();
    var wordsearch = "puppy";
    var index = s.indexOf(wordsearch);
    var fail = -1;
    for (var i = 0; i < s.length; i++){
        var index = s.indexOf(wordsearch, i);
        if (index > fail){
        createP("You can find the word '"+ wordsearch + "' at index: " + index);
        fail = index;
    }
    }
}

    function tweetchecker(){
    var s = textfield.value();
    
    if(s.length < 141){
        createP(s);
    }
    else{
        createP("Your message is too long. :(");
    }


}

