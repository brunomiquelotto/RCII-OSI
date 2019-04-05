var fn = function(req, res, next) {
    console.log('Passei na camada Apresentacao');
    next();
};

module.exports = fn;
