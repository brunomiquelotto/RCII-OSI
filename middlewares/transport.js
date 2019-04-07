var fn = function(req, res, next) {
    const Transport = require('../models/Transport');
    var transport = new Transport();

    transport.setMessage(req.body[5]['Mensagem']);
    transport.setResponsability("Responsável por processos que controlam a transferência de dados, cuidando de erros");
    transport.setDeliverData('Entregando Dados');
    transport.setTransmitData('Transmitindo dados');
    transport.setSegmentData('Segmentando Dados');
    transport.setTcpHeader("192.168.0.1");

    req.body[4] = transport;
    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
