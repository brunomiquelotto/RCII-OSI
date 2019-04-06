var fn = function(req, res, next) {
    const Transport = require('../models/Transport');
    var transport = new Transport();

    transport.setMessage(req.body.text);
    transport.setResponsability("Responsible for processes that control the transfer of data, taking care of errors");
    transport.setDeliverData('Delivering data');
    transport.setTransmitData('Transmitting dataa');
    transport.setSegmentData('Segmenting Data');

    req.body[4] = transport;
    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
