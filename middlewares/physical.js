var fn = function(req, res, next) {
    console.log('Passei na camada Física');
    next();
};

module.exports = fn;
