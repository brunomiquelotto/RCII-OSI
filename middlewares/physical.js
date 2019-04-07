var fn = function(req, res, next) {
    const Physical = require('../models/Physical');
    var physical = new Physical;

    physical.setMessage(req.body[2]['message']);
    physical.setResponsability('Responsible for delivering and formatting information from the application layer to later');
    physical.setBits();
    physical.setConexao('Connecting');
    physical.setConnection('Connected');

    req.body[1] = physical;
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
