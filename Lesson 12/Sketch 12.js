var lexicon;
var button;
var input;

var nlp = window.nlp_compromise;

function setup(){
    noCanvas();
    input = createInput("I will destroy the last annoying Saiyan!");
    input.size(300);
    button = createButton('submit');


    input.changed(process2);
    button.mousePressed(process2);


    lexicon = new RiLexicon;

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
        if (/jj.*/.test(partof[i])){
            output+= lexicon.randomWord(partof[i]);
        }
        else
        {
            output += wordarray[i];
        }

        output += ' ';

    }
    createP(output);

}



function process(){
    var s = input.value();

    var statements = nlp.statement(s);
    var output = statements.negate().text();
    createP(output);
}

function process2(){
    var s = input.value();
    var sen = nlp.sentence(s);
    var output = ' ';
    for( var i = 0; i < sen.terms.length; i++){
        //console.log(output);
        var pos = sen.terms[i].pos;
        var word = sen.terms[i].text;
        
        if(pos.Noun && !pos.Pronoun){
            word = nlp.noun(word).pluralize();
        }
        else if(pos.Verb){
            word = nlp.verb(word).conjugate().future;
        }
        else if(pos.Adjective){
            word = nlp.adjective(word).toNegative();
        }
        output += word;
        output += sen.terms[i].whitespace.trailing;
        
    }
    createP(output);
}
