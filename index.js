var cool = require("cool-ascii-faces");
var express = require("express");
var port = 12345;
var bodyParser = require("body-parser");

var contacts = [
    {
        name : "pepe",
        phone: 12345
    },
    {
        name : "pablo",
        phone: 6789
    }
];

const BASE_API_URL = "/api/v1";
app.get(BASE_API_URL+"/contacts", (request,response) => {
    response.json(contacts);
    console.log("New GET to /contacts");
});
app.post(BASE_API_URL+"/contacts", (request,response) => {
    var newContact = request.body;
    console.log(`newContact = ${JSON.stringify(newContact,null,2)}`);
    console.log("New POST to /contacts");
    contacts.push(newContact);
    response.sendStatus(201);
});


//esqueleto de un servidor web
var app = express();


//req = request res = response
app.get("/faces", (req,res) => {
    res.send(cool());
    console.log("New request");
});

app.listen(port,() => {
    //con esto nos  aseguramos quele mensaje no ale hasta que el servidor no esta escucha ndo de verdad
    console.log(`Server escuchando en el puerto ${port}`);
}); //puertos hasta 32k

