module.exports = function (req, res, next) {
    // permite acesso as apis de qualquer ip
    res.header('Access-Control-Allow-Origin', '*')
    // permite acesso as apis com metodos GET, POST, PUT e DELETE
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // configura cabeçalho da resposta
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content - Type, Accept')
    // executa proxima atividade
    next()
  }