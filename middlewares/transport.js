var fn = function(req, res, next) {
<<<<<<< HEAD
    const Session = require('../models/Transport');
     var transport = new Transport;

    transport.setMessage(req.res.text);
    transport.setResponsability("Responsible for processes that control the transfer of data, taking care of errors");
    transport.setEntregarDados('Entregando dados');
    transport.setTransmitindoDados('Transmitindo Dados');
    transport.setSegmentandoDados('Segmentando Dados');
    transport.setEntregarDados('Entregando Dados');

    req.body[4] = session;

=======
    const Transport = require('../models/Transport');
    var transport = new Transport();

    transport.setMessage(req.body[5]['message']);
    transport.setResponsability("Responsible for processes that control the transfer of data, taking care of errors");
    transport.setDeliverData('Delivering data');
    transport.setTransmitData('Transmitting dataa');
    transport.setSegmentData('Segmenting Data');

    req.body[4] = transport;
>>>>>>> 9fb7946af3a85e2bb4623a39978d1f0476f77251
    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
