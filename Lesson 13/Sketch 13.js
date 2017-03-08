/* Data Sets: CSV, XML, JSON(JavaScript Object Notation), Text Files(useful for both humans and computers), PDFs(useful for us, kind of for computers), Web Pages(Useful for us, not computers), API = Application Programming Interface. 2 Computers can communicate and share data.
*/

var items;

function preload(){
    
    items = loadJSON("Sample13.json", gotData);
}

function setup(){
    createCanvas(400, 400);
    //items = {
     //   name: "mastersword", 
     //   location: "water temple",
     //   color: color(200,200,0)
   // }
   // items2 = {
    //    name: "master shield", 
    //    location: "hryule temple",
    //    color: color(500,20,200)
    //}
    
    
    
    
}

function gotData(data){
    console.log(data);
}


function draw(){
    
    background(0);
    fill(items.weapons[0].red, items.weapons[0].green, items.weapons[0].blue);
    text(items.weapons[0].name, 10, 50);
    text(items.weapons[0].location, 10, 60);
    //text(items2.name, 300, 50);
    //text(items2.location, 300, 60);
    
}