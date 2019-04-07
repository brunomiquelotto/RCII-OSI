var fn = function(req, res, next) {
    const Link = require('../models/Link');
    var link = new Link();

    link.setMessage(req.body[3]['message']);
    link.setResponsability('Responsible for the message of the process');
    link.setFlow("Proceeding with the process");
    link.validateError(true);
    link.setTcpHeader(req.body[3]['tcpHeader']);
    link.setIpHeader(req.body[3]['ipHeader']);
    link.setMacHeader("CA-FF-28-BE-32-80");

    req.body[2] = link;
    console.log(req.body);
    console.log('Passei na camada de Enlace');
    next();
};

module.exports = fn;
