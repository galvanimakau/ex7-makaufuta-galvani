//variabelen aanmaken
var express = require('express'); //webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); // webserver variabel

//applicatie werkbaar maken
app.use(bodyparser.json()); //automatische json-body

//server starten
app.listen(4567); //poort definieren
console.log("Server started"); //laten verschijnen

//rekenmachine halen uit html
app.get("/", function(response){
    response.sendFile(__dirname + '/calculator.html');
});