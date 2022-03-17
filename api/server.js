
const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const path = require('path')

require('dotenv').config()

// const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

// colocando conexao com banco de dados dentro de APP
app.db = db


consign({ cwd: path.join(__dirname) })
    .include('./models')  // essa camada precisa ficar acima dos script. Validações de error
    .then('./middlewares')       // chama o include
    .then('./controllers')              // muda o _lastOperation para include //  method authenticate / para ter acesso web services
    .then('./routes')         // chama o include
    .into(app) // injetar o fluxo API 

app.listen(process.env.PORT || 3000)