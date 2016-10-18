//variabelen aanmaken
var express = require('express');//webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); //webserver variabel

// applicatie werkbaar maken
app.use(bodyparser.json()); // automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
