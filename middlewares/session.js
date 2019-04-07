var fn = function(req, res, next) {
    const Session = require('../models/Session');
    var session = new Session();

    session.setMessage(req.body[6]['message']);
    session.setResponsability("É responsável por controlar os diálogos da rede. Estabelece, mantém e sincroniza a interação entre os sistemas.");
    session.setControlCommunication ("Comunicação de controle");
    session.setConnection ("Criando Conexao");

    req.body[5] = session;
    console.log('Passei na camada Sessao');
    next();
};

module.exports = fn;
