var fn = function(req, res, next) {

    var Presentation = require('../models/Presentation');

    req.body[6] = new Presentation(req.body.text).convertData();
    console.log('Passei na camada Apresentacao');
    next();
};

module.exports = fn;
