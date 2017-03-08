var lexicon;
var input;

function setup(){
    noCanvas();
    input = createInput("It was a dark, edgy, and stormy night.");
    input.size(300);
    button = createButton('submit');
    
    
    input.changed(processRita);
    button.mousePressed(processRita);
    
    
    lexicon = new RiLexicon;
    lexicon.addwWord('Nick Velez', 'n-ic vel-es', 'nn');
    console.log(lexicon);
    //var r = new RiString();
    
    
    
    //To look at features
    //console.log(r.features());
}

function processRita(){
    var s = input.value();
    var r = new RiString(s);
    
    var wordarray = r.words();
    console.log(wordarray);
    //rebuild sentence
    var output = '';
    
    //part of speech variable
    var partof = r.pos();
    console.log(partof);
    
    //if it's a noun, replace it
    

    
    for (var i = 0; i < wordarray.length; i++){
        if (/nn.*/.test(partof[i])){
        output+= lexicon.addWord('Nick Velez');
    }
    else
    {
           output += wordarray[i];
    }

    output += ' ';
        
    }
    createP(output);
    
}