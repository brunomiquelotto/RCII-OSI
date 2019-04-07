var fn = function(req, res, next) {
    const Network = require('../models/Network');
    var network = new Network();

    network.setMessage(req.body[4]['Mensagem']);
    network.setResponsability('Destina-se a fornecer suporte de comunicação de ponta a ponta para as camadas superiores.');
    network.setSelectRoute('Rota Selecionada');
    network.setDirectPackage('Pacote Alvo');
    network.setTcpHeader(req.body[4]['tcpHeader']);
    network.setIpHeader("192.198.1.5");

    req.body[3] = network;
    console.log('Passei na camada de Rede');
    next();
};

module.exports = fn;
