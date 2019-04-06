var fn = function(req, res, next) {
    const Link = require('../models/Link');
    var link = new Link(req.body.text);

    link.setmessage(req.res.body);
    link.setResponsability('Responsible for the message of the process');
    link.setSelecionarRota('Selecionando Melhor Rota');
    link.setDirecionarPacote('Direcionando Pacote');
    
    console.log(req.body);
    console.log('Passei na camada de Enlace');
    next();
};

module.exports = fn;
