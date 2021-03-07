/*
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hola Mundo');
}).listen(8000);

console.log('Servidor en la url http://127.0.0.1:8000/')*/

const express = require('express');
const app = express();
const port = 3000

'127.0.0.1:3000/'

//Ruta
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.listen( port, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

