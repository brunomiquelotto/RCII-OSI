var fn = function(req, res, next) {
    const Physical = require('../models/Physical');
    var physical = new Physical;

    physical.setMessage(req.res.body);
    physical.setResponsability('Responsible for delivering and formatting information from the application layer to later');
    physical.setBits(1001110);
    physical.setConexao('Conectando');
    physical.setIsConexao('');

    physical.setBits
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
