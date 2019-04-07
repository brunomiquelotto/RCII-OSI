var fn = function(req, res, next) {
    const Network = require('../models/Network');
    var network = new Network();

    network.setMessage(req.body[4]['message']);
    network.setResponsability('It aims to provide end-to-end communication support for the upper layers.');
    network.setSelectRoute('Selected route');
    network.setDirectPackage('Targeted Package');
    network.setTcpHeader(req.body[4]['tcpHeader']);
    network.setIpHeader("192.198.1.5");

    req.body[3] = network;
    console.log('Passei na camada de Rede');
    next();
};

module.exports = fn;
