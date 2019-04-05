var fn = function(req, res, next) {
    req.body = { 7: req.body.text };
    console.log('Passei na camada Aplicaçao');
    next();
};

module.exports = fn;
