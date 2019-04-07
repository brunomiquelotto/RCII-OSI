var fn = function(req, res, next) {
    const Session = require('../models/Session');
    var session = new Session();

    session.setMessage(req.body[6]['message']);
    session.setResponsability("Responsible for processes that control the transfer of data, taking care of errors");
    session.setControlCommunication ("Controlling communication");
    session.setConnection ("Creating connection");

    req.body[5] = session;
    console.log('Passei na camada Sessao');
    next();
};

module.exports = fn;
