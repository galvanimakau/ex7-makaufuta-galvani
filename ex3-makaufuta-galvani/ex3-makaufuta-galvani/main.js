//sommige code gehaalde van Jonas
//variabelen aanmaken
var express = require('express'); //webserver
var bodyparser = require('body-parser'); //extensie op express
var app = express(); // webserver variabel
var calculated = []; // array aanmaken

//bodyparser bevestigen
app.use(bodyparser.urlencoded({
    extended:true
}));

//applicatie werkbaar maken
app.use(bodyparser.json()); //automatische json-body

//server starten
app.listen(4567); //poort definieren
console.log("Server started"); //laten verschijnen

//rekenmachine halen van html
app.get("/", function(response){
    response.sendFile(__dirname + '/rekenmachine.html');
});

//behouden van de calculated
app.get("/calculated", function(response){
    response.send(calculated);
});

//rekenmachine posten op een website
app.post("/", function(request, response){
    //calculation
    var calculation = eval (request.body.display);
    console.log(calculation);
    //calculated
    var calcul = request.body.display;
    calculated.pust({"calcul": calcul, "calculated":calculation});
    response.status(201).send(calculated); // nieuwe pagina openen
});