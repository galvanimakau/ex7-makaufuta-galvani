//variabelen aanmaken
var express = require('express');//webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); //webserver variabel

// applicatie werkbaar maken
app.use(bodyparser.json()); // automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.

//functie aanmaken
app.get('/maal/:n1/:n2', function(request, response) {
    var Antwoord;
}); // functie maal

app.get('/delen/:n1/:n2', function(request, response) {
    var Antwoord;
}); // functie delen

app.get('/plus/:n1/:n2', function(request, response) {
    var Antwoord;
}); // functie plus

app.get('/min/:n1/:n2', function(request, response) {
    var Antwoord;
}); // functie min
