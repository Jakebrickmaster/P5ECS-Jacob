var apikey =  "?api-key=3a4cb87a9dbd4c4c800759527691892c";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var search;
var begin;
var end;
var submit;
var begindate = "&begin_date=";
var enddate = "&end_date=";
var query = "&q=";

//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3a4cb87a9dbd4c4c800759527691892c&q=instagram

function setup(){
    noCanvas();

    //link = createA('#', "Click me for Instagram Articles!");
    //link.mousePressed(findArticles);
    search = select('#search');
    begin = select('#begin');
    end = select('#end');
    submit = select('#submit');
    
    //var button = select('#submit');
    submit.mousePressed(findArticles);
    //input = select('#search');
}


function findArticles(){
   // search = input.value();
    var s = search.value();
    var b = begin.value();
    var e = end.value();
    
    loadJSON(url+apikey+query+s+begindate+b+enddate+e, gotData);
}

function gotData(data){
    console.log(data);
    var articles = data.response.docs;
    for(var i = 0; i < articles.length; i++){
        createElement('h2', articles[i].headline.main);
        createElement('h3', articles[i].snippet);
    }
}