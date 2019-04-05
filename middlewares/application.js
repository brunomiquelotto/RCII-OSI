var fn = function(req, res, next) {
    const Application = require('../models/Application');
    var application = new Application(req.body.text)

    application.setMessage(req.body.text);
    application.setResponsability("Responsible for the message of the process");
    application.setCommunicateProcess("Communication between processes");
    application.setManageNetwork("Managing Network");
    application.setShareResources("Sharing resources");
    application.setNetworkServices("Managing network services");
    application.setServiceDirectory("Managing directory service");
    application.setSpecializedFunction("Specialized Functions");

    req.body[7] = application;
    console.log('Passei na camada Aplicaçao');
    next();
};

module.exports = fn;
