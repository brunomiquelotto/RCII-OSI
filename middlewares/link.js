var fn = function(req, res, next) {
    console.log(req.body);
    console.log('Passei na camada de Enlace');
    next();
};

module.exports = fn;
