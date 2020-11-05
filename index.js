
var fs = require('fs');
var parser = require('./Archivos/Jison/Grama');

function ejecutar(texto)
{
    try
    {
        let traduccion = parser.parse(texto);
        console.log(traduccion);
    }catch(err)
    {
        console.log(err);
    }
}

fs.readFile('prueba1.txt', 'utf8', function(err, data) {
    console.log(data);
    ejecutar(data);
    console.log('Analisis terminado.')
})