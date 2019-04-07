var fn = function(req, res, next) {
    const Presentation = require('../models/Presentation');
    var presentation = new Presentation();

    presentation.setMessage(req.body[7]['message']);
    presentation.setResponsability("É responsável pela sintaxe e semântica das informações trocadas entre dois sistemas. Entre as tarefas específicas estão: -Transferência (de códigos) -Encriptação -Compressão");
    presentation.setEncryptData ("Criptografando dados");
    presentation.setCodeData ("Codificação");
    presentation.convertData(req.body.text);

    req.body[6] = presentation;
    console.log('Passei na camada Apresentacao');
    next();
};

module.exports = fn;
