console.log("Hello world");
//declarar variable
var a;
let b;
a = 1; //no da fallo si no la declaramos aunque lo interesante es declararlas
console.log(a);

my = 2.1;
my = true;
//el valor es el ultimo que se le da

var myDouble = 2.1;
myDouble = "hola" + 1;
console.log(myDouble);

//Definir bien las variables con sus tipos
//cuando no sabemos de donde vienen los datos, parseamos por ejemplo a 
//entero para quitarnos de problemas

//dos tipos de igualdad en js:
// a ==b , a === b, el de tres para mismo tipo obligatorio

//tres tipos de comillas, "",'',``

function log(msg){
    console.log(msg);
}

log("Mi fantastico log");

//todo en js son un objeto
var o = new Object();
o.name = "petete";
o.l = log; //añadiendo un metodo dinamico a una funcion ya definida
o.l("log del objeto");

var m = new Map();

var numbers = [1,2,3,4];
log(numbers);
for(var i=0;i<numbers.length;i++){
    log(numbers[i]);
}
//hace lo mismo que el for
numbers.forEach(log);
//callback:  metodo que paso como parametro a una funcion, programacion asincrona

//Tambien podriamos hacer la manera
numbers.forEach(function (msg){
    console.log("v2: "+msg);
});

//Y de esta: con operador flecha
numbers.forEach((msg) => {
    console.log("v3: "+msg);
});

//Tambien esta el iterador filter
numbers.filter((n) => {
        return n > 2 ;
        }).map((n) => {
            return n + 1;
        }).forEach(log);

//reduce tambien intersante 