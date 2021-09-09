const express = require('express');
const server = express();
const processos = require('./src/data/processos.json');

//o heroku nao retorna a porta 3000 por isso faz dessa forma pra ele criar uma porta pra mim
const port = process.env.PORT || 3000;

// a barra é pra pegar todas as rotas
server.get('/processos', (req, res) => {
    return res.json(processos)

})
server.listen(port, () => {
    console.log('servidor está funcionando...');
});