/*api.riotgames.com/?champion=ezreal&weapon=doransblade&appid=0d0874a3db41a8e5588d2ce2f02cc60b


api.openweatherdata.org/data/2.5/weather
q=London
q=London,UK
appid=0d0874a3db41a8e5588d2ce2f02cc60b
units=metric
units=imperial
*/
var climate;
var api = 'http://api.openweathermap.org/data/2.5/weather?';
var cityquery = 'q=';
var apikeyquery = '&appid=';
var apikey = '0d0874a3db41a8e5588d2ce2f02cc60b';
var unitsquery = '&units=';
var units = 'imperial';
var city;
var input;
function setup(){
    createCanvas(600,600);
    //loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Burbank,ca&units=imperial&appid=0d0874a3db41a8e5588d2ce2f02cc60b", gotData);
    
    var button = select('#submit');
    button.mousePressed(weatherAsk);
    input = select('#city');
}

function weatherAsk(){
    city = input.value();
    var url = api + cityquery + city + unitsquery + units + apikeyquery + apikey;
    loadJSON(url, gotData);
}

function gotData(data){
    console.log(data);
    climate=data;
    
}

function draw(){
    background(0)
    if(climate){
    var humidity = climate.main.humidity;
    var temperature = climate.main.temp;
 ellipse(100,250,humidity, humidity);
 ellipse(300,400,temperature,temperature);
    }
}