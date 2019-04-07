var fn = function(req, res, next) {
    const Physical = require('../models/Physical');
    var physical = new Physical;

    physical.setMessage(req.body[2]['message']);
    physical.setResponsability('Trata da transmissão de bits através de um canal de comunicação, bem como define suas características (do canal). Regula aspectos da comunicação, como o tipo de sinal (analógico, digital)');
    physical.setBits();
    physical.setConexao('Conectando');
    physical.setConnection('Conectado');

    req.body[1] = physical;
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
