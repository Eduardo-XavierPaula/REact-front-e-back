// cria uma instancia do express -> servidor HTTP
const express = require('express')
// executa uma função e retorna o resultado desta
// a função recebe como parametro a instancia de um servidor
module.exports = function(server) {
  // cria instancia das rotas de API
  const router = express.Router()
    //configura instancia que representa os metodos get ,post , put e delete
    // estes metodos estao associados ao esquema TODO
  server.use('/api', router)
  // registra a rota /todos
    // entao, na verdade teremos a api /api/todo pronta para ser executada
    // localhost:3003/api/todos -> get , post , put e delete
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}
