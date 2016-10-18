//variabelen aanmaken
var express = require('express');//webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); //webserver variabel

// applicatie werkbaar maken
app.use(bodyparser.json()); // automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.

//functie aanmaken
app.get('/maal/:n1/:n2', function(request, response) {
    var Antwoord = parseInt(request.params.n1) * parseInt(request.params.n2); //berekening maal
    response.send("De antwoord is: " + Antwoord);
}); // functie maal

app.get('/delen/:n1/:n2', function(request, response) {
    var Antwoord = parseInt(request.params.n1) / parseInt(request.params.n2);//berekening delen
    response.send("De antwoord is: " + Antwoord);
}); // functie delen

app.get('/plus/:n1/:n2', function(request, response) {
    var Antwoord = parseInt(request.params.n1) + parseInt(request.params.n2); //berekening plus
    response.send("De antwoord is: " + Antwoord);
}); // functie plus

app.get('/min/:n1/:n2', function(request, response) {
    var Antwoord = parseInt(request.params.n1) - parseInt(request.params.n2); //berekening min
    response.send("De antwoord is: " + Antwoord);
}); // functie 

//server starten
app.listen(4567); //poort definieren

//logs laten verschijnen
console.log("Server started");// laten verschijnen

//meegewerkt met Jeroen van den Bergh en jonnick Makau futa 