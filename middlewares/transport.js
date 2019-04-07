var fn = function(req, res, next) {
    const Transport = require('../models/Transport');
    var transport = new Transport();

    transport.setMessage(req.body[5]['message']);
    transport.setResponsability("Divide os dados e segmentos e é responsável pela sua entrega. Garante que a mensagem chegue intacta e em ordem, supervisionando o controle de fluxo e o controle de erros no nível de origem-destino.");
    transport.setDeliverData('Entregando Dados');
    transport.setTransmitData('Transmitindo dados');
    transport.setSegmentData('Segmentando Dados');
    transport.setTcpHeader("192.168.0.1");

    req.body[4] = transport;
    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
