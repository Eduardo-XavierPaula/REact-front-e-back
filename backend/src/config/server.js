// define porta do servidor http
const port = 3003
// cria instancia de body-parse
const bodyParser = require('body-parser')
// cria uma instancia do express
const express = require('express')
// cria um servidor http express
const server = express()
// cria uma instancia do arquivo cors
const allowCors = require('./cors')

// configura servidor para obter dados do formulario do usuario
server.use(bodyParser.urlencoded({ extended: true }))
// configura servidor para dados chegarem no formato json
server.use(bodyParser.json())
// configura servidor para usar CORS
server.use(allowCors)

// sobe o servidor
server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server