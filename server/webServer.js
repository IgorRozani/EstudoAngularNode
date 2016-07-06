const express = require('express');
const app = express();

// Caminho da pasta do server
const path = require("path");
// Raiz do projeto
const rootPath = path.normalize(__dirname + '/../');
const clientService = require('./clientController');

app.use('/static', express.static(rootPath + '/node_modules'));
app.get('/clientes', clientService.getAll);
app.use('/', express.static(rootPath+'/app'));

app.listen(8000, function (){
  console.log('Listening on port 8000...');
});
