var dropzone;

function setup(){
    var canvas = createCanvas(200,200);
    background(0);
  
    canvas.drop(gotFile);

    //     dropzone = select('#dropzone');
    //    dropzone.dragOver(dragcolor);
    //    dropzone.dragLeave(originalcolor);
    //    dropzone.drop(gotFile, originalcolor);
}

function dragcolor() {
    dropzone.style('background-color', '#ccc');


}

function gotFile(file){
    createP(file.name);
    createP(file.type);
    createP(file.size);
    var img = createImg(file.data);
    img.hide();
    
    image(img, 0, 0, 200, 200)
    // x, y , width, height
}

function originalcolor(){

    dropzone.style('background-color', '#fff')
}