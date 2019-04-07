var fn = function(req, res, next) {
    const Application = require('../models/Application');
    var application = new Application()

    application.setMessage(req.body.text);
    application.setResponsability("Responsavel pela mensagem do processo");
    application.setCommunicateProcess("Comunicacao entre processos");
    application.setManageNetwork("Gerenciando Rede");
    application.setShareResources("Compartilhando Recursos");
    application.setNetworkServices("Gerenciando Serviços de Rede");
    application.setServiceDirectory("Gerenciando Serviço do Diretorio");
    application.setSpecializedFunction("Funções Especializadas");

    req.body[7] = application;
    console.log('Passei na camada Aplicaçao');
    next();
};

module.exports = fn;
