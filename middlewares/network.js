var fn = function(req, res, next) {
    const Application = require('../models/Network');
    var network = new Network(req.res.body);

    network.setMenssage(req.res.body);
    network.setResponsability('Responsible for the message of the process');
    network.setSelecionarRota('Selecionando Melhor rota');
    network.setDirecionarPacote('Direcionando pacote');
    
    console.log('Passei na camada de Rede');
    next();
};

module.exports = fn;
