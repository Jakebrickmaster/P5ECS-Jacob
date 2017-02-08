var srctxt;
var words;

function preload(){
    
    srctxt = loadStrings('Algor.txt');
}


function setup(){
    noCanvas();
    srctxt = join(srctxt, ' ');
    
    
    words = splitTokens(srctxt, ' ,!.?');
    
    var seed = select('#seed');
    var submit = select('#submit');
    
    submit.mousePressed(function(){
        
        //createP(seed.value());
        //createP(srctxt);
        var poem = diastic(seed.value(), words);
        
        createP(poem);
        
        
    });
}

function diastic(seed, text){
    var phrase = "";
    
 var currentWord = 0;   
    
   //1. How can we find the character at the word's index?
    //SEED: Rainbow
    //PHRASEL Ralph sat on the painful ferns
   for (var i = 0; i < seed.length; i++){ 
    var c = seed.charAt(i);
    
       for (var j = currentWord; j < words.length; j++){
           /*Create a case such that the word in the word array has a letter at the index identical to the seed phrase*/
           if (words[j].charAt(i) == c){
               phrase += words[j];
               phrase += " ";
               currentWord = j + 1;
               console.log(words[j]);
               break;
           }
           
       }
   }
    return phrase;
}

function myfunction() {
    var str = document.seed.value();
    var res = str.replace("Goku," "Kakarot")
    var res = str.replace("Super Saiyan Blue", "Super Saiyan God Super Saiyan")
    document.seed.value = res;
}

function ReadTextFile() {
    
}
 
