var fn = function(req, res, next) {
    console.log('Passei na camada de Rede');
    next();
};

module.exports = fn;
