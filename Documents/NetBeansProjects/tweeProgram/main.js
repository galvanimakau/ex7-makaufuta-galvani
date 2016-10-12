var express = require("express");
var app = express();

app.listen(4567);

app.get("/books", function(request, response){
    response.send({name:"Beginning Node JS", rating:4});
    });

console.log("woow, dees werkt!n maar het doet echt");