var fn = function(req, res, next) {
    console.log('Passei na camada Sessao');
    next();
};

module.exports = fn;
