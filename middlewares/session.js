var fn = function(req, res, next) {
    const Session = require('../models/Session');
    var session = new Session();

    session.setMessage(req.body[6]['Mensagem']);
    session.setResponsability("Responsável por processos que controlam a transferência de dados, cuidando de erros");
    session.setControlCommunication ("Comunicação de controle");
    session.setConnection ("Criando Conexao");

    req.body[5] = session;
    console.log('Passei na camada Sessao');
    next();
};

module.exports = fn;
