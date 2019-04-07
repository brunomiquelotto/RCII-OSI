var fn = function(req, res, next) {
    const Network = require('../models/Network');
    var network = new Network();

    network.setMessage(req.body[4]['message']);
    network.setResponsability("É responsável pela origem de envio ao destino dos pacotes. É responsável pelo roteamento e determinação lógica da melhor rota.");
    network.setSelectRoute('Rota Selecionada');
    network.setDirectPackage('Pacote Alvo');
    network.setTcpHeader(req.body[4]['tcpHeader']);
    network.setIpHeader("192.198.1.5");

    req.body[3] = network;
    console.log('Passei na camada de Rede');
    next();
};

module.exports = fn;
