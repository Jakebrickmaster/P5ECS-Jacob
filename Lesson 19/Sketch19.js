/*
All computers/ laptops run on a P5.JS framework for web browsers.
Also known as the cloud. Clouds and Servers are almost identical.
WHen you search something, you send a request to the cloud and it responds back.

OAuth
*/

console.log("Hello You!");

var express = require('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log("listening...");
}

app.use(express.static('website'));

/*
http://pokedexapi.com/about
http://pokesexapi.com/search/pikachu
*/

app.get('/pikachu', sendPikachu);

function sendPikachu(request, response){
    
    response.send('Pikachu is cool, I guess...');
    
}

//search/pikachu

app.get('/ulove/:pokemon', sendPokemon);
function sendPokemon(request, response){
    var data = request.params;
    
    var reply = "I love " + data.pokemon + " , too!";
    
    response.send(reply);
}

var pokedex = {
    
    "Bulbasaur": 1,
    "Charmander": 4,
    "Pikachu": 25,
    "Mewtwo": 150
}


app.get('/all', sendAll);
function sendAll(request, response){
    
    response.send(pokedex);
    
}


app.get('/add/:pokemon/:num?', addPokemon);
function addPokemon(request, response){
    
    var data = request.params;
    var pokemon = data.pokemon;
    var num = Number(data.num);
    
    
    var reply;
    
    if(!num) {
        reply = {
            msg: "GIVE ME NUMBER HUMAN!"
        }
    }
    else{
    pokedex[pokemon] = num;
    reply = {
        msg: "Nice Discovery! Thank you for your pokemon."
            }
    }
    response.send(reply);
    
    
}

app.get('/search/:pokemon', searchPokemon);
function searchPokemon(request, response){
    
    var data = request.params;
    var pokemon = data.pokemon;
    var reply;
    
    if(pokedex[pokemon]){
        reply = {
            status: "found",
            pokemon: pokemon,
            dexnum: pokedex[pokemon]
        }
    }
    else
    {
        reply = {
            status: "Not Found",
            pokemon: pokemon
        }
    }
    response.send(reply);
    
}