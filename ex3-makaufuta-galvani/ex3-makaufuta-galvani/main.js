//variabelen aanmaken
var express = require('express'); //webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); // webserver variabel

//applicatie werkbaar maken
app.use(bodyparser.json()); //automatische json-body