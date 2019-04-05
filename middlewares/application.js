var fn = function(req, res, next) {   
    var Application = require('../models/Application');
    
    req.body[7] = new Application(req.body.text);
    console.log('Passei na camada Aplicaçao');
    next();
};

module.exports = fn;
