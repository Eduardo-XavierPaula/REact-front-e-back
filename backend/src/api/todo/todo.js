// cria uma instancia node-restful
const restful = require('node-restful')
// fazer a instancia estar preparada para trabalhar com MongoDb
const mongoose = restful.mongoose
// cria uma instancia de um esquema do Mongo Db
// coluna description (String) ,done (Boolean) e createdAt (Date)
const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
})
// cria um modelo do esquema chamado Todo e o exporta para ser utilizado em outro arquivo
module.exports = restful.model('Todo', todoSchema)
