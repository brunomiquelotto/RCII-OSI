var fn = function(req, res, next) {
    const Presentation = require('../models/Presentation');
    var presentation = new Presentation();

    presentation.setMessage(req.body[7]['Mensagem']);
    presentation.setResponsability("Responsável pela entrega e formatação de informações da camada de aplicação para posterior");
    presentation.setEncryptData ("Criptografando dados");
    presentation.setCodeData ("Codificação");
    presentation.convertData(req.body.text);

    req.body[6] = presentation;
    console.log('Passei na camada Apresentacao');
    next();
};

module.exports = fn;
