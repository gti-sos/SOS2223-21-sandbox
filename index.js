var cool = require("cool-ascii-faces");
var express = require("express");
var port = 12345;

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

