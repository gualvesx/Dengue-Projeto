const express = require('express')
const mysql = require('mysql');

const connection = mysql.createConnection({ host: '10.111.4.30', user: 'dev1b', password: 'Sen4i2024', database: 'dev1b' });

connection.connect((err) => { if (err) { console.error('Erro ao conectar ao banco de dados:', err); return; } console.log('Conectado com sucesso ao banco de dados!'); });

const app = express()

app.listen(3000)


app.get('/filmes',async function(req, res){


   var dados = await conexao.query('select * from filmes')
   console.log(dados[0])
   res.send(dados[0])
})

