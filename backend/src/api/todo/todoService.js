// cria uma instancia do esquema todo
const Todo = require('./todo')
// configura os metodos da api
// get->consulta
// post->insere
// put->atualiza
// delete->remove
Todo.methods(['get', 'post', 'put', 'delete'])
// configura as opções da atualização
// depois de atualizar, retorna a tarefa atualizada (new: true)
// ao atualizar, os validadores devem ser utilizados (runValidator: true)
Todo.updateOptions({new: true, runValidators: true})
// exporta o esquema para ser utilizado em outro arquivo
module.exports = Todo