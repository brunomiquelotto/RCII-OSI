var fn = function(req, res, next) {
    console.log('Passei na camada Transporte');
    next();
};

module.exports = fn;
