require('./config/conexao')
const cors = require('cors')
const express = require('express')
const app = express()
const porta = 3000

// Utilizar arquivos no formato json
app.use(express.json())
app.use(cors())

// Criando variável para armazenar todas as rotas definidas no arquivo rotas.js
const rotasContas = require('./rotas')
// para todas as rotas definidas no arquivo rotas.js , deve ser considerado o caminho /tarefas
app.use('/contas', rotasContas)


app.listen(porta, () => {
  console.log("Servidor Rodando")
})