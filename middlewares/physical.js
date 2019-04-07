var fn = function(req, res, next) {
<<<<<<< HEAD
    const Session = require('../models/Physical');
    var physical = new Physical;

    physical.setBits
=======
    const Physical = require('../models/Physical');
    var physical = new Physical;

    physical.setMessage(req.body[2]['message']);
    physical.setResponsability('Responsible for delivering and formatting information from the application layer to later');
    physical.setBits();
    physical.setConexao('Connecting');
    physical.setConnection('Connected');

    req.body[1] = physical;
>>>>>>> 9fb7946af3a85e2bb4623a39978d1f0476f77251
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
