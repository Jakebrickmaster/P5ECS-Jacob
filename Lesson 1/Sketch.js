function setup(){
    createCanvas(640,340);
    background(225);
}
function draw(){
   //sky
    fill(20,72,155)
    rect(0,0,640,340)
    //grass
    fill(10,150,48)
    rect(0,280,640,340)
    //moon
    fill(235,235,255)
    ellipse(60,40,50,50)
    //house
    fill(135,9,0)
    rect(200,180,200,139)
   //roof
    fill(220,205,0)
    triangle(200,181,400,181,290,81)
    //door
    fill(200,200,5)
    rect(280,269,30,50)
    //door handle
    fill (0,0,0)
    ellipse(305,300,5,5)
    //windows
    fill(255,255,255)
    rect(225,220,30,30)
    rect(335,220,30,30)
    //pathway
    fill(220,170,0)
    rect(275,319,40,21)
if(mouseIsPressed){
    ellipse(mouseX,mouseY,15,15);
}
if(keyIsPressed){
        noStroke();
        fill(225);
        ellipse(mouseX,mouseY,100,100);
    }
    
}