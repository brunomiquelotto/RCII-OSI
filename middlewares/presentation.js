var fn = function(req, res, next) {
    const Presentation = require('../models/Presentation');
    var presentation = new Presentation();

    presentation.setMessage(req.body.text);
    presentation.setResponsability("Responsible for delivering and formatting information from the application layer to later");
    presentation.setEncryptData ("Encrypting data");
    presentation.setCodeData ("Encoding data");
    presentation.convertData(req.body.text);

    req.body[6] = presentation;
    console.log('Passei na camada Apresentacao');
    next();
};

module.exports = fn;
