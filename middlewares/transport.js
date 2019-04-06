var fn = function(req, res, next) {
    const Session = require('../models/Transport');
     var transport = new Transport;

    transport.setMessage(req.res.text);
    transport.setResponsability("Responsible for processes that control the transfer of data, taking care of errors");
    transport.setEntregarDados('Entregando dados');
    transport.setTransmitindoDados('Transmitindo Dados');
    transport.setSegmentandoDados('Segmentando Dados');
    transport.setEntregarDados('Entregando Dados');

    req.body[4] = session;

    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
