var fn = function(req, res, next) {
    const Session = require('../models/Physical');
    var physical = new Physical;

    physical.setBits
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
