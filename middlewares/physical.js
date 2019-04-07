var fn = function(req, res, next) {
    const Physical = require('../models/Physical');
    var physical = new Physical;

    physical.setMessage(req.body[2]['Mensagem']);
    physical.setResponsability('Responsável pela entrega e formatação de informações da camada de aplicação para posterior');
    physical.setBits();
    physical.setConexao('Conectando');
    physical.setConnection('Conectado');

    req.body[1] = physical;
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
