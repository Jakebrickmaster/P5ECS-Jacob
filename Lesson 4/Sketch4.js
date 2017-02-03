var txt;

function preload(){
    txt = loadStrings("Sample.txt");

    
}
function setup(){
    noCanvas();
    
    
   // console.log(txt);
   // createP(join(txt, "<br/>"));
    
    createFileInput(fileupload);
    
    var  button = select('#loadfile');
    button.mousePressed(loadTXT);
    
    
}

function fileupload(file){
    
    console.log(file);
    createP(file.name + " " + file.size + " " + file.type);
    
    if(file.type == "text"){
    createP(file.data);
    }
    else{
        createP("ERROR: This is not a text file.")
    }
}

function loadTXT(){
    
    loadStrings("Sample.txt", fileloaded);
}

function fileloaded(data){
    
    createP(join(data, "<br/>"));
}