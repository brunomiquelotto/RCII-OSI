var fn = function(req, res, next) {
    console.log('Passei na camada Aplicaçao');
    next();
};

module.exports = fn;
