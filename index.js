const cors = require('cors');
const express = require('express');
const app = express();
const processos = require('./src/data/processos.json');

//o heroku nao retorna a porta 3000 por isso faz dessa forma pra ele criar uma porta pra mim
const port = process.env.PORT || 3000;

app.use(cors());

// a barra é pra pegar todas as rotas
app.get('/processos', (req, res) => {
    return res.json(processos)

})
app.listen(port, () => {
    console.log('servidor está funcionando...');
});