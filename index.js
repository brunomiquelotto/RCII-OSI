var express = require("express");
var bodyParser = require('body-parser');
var applicationMiddleware = require('./middlewares/application');
var presentationMiddleware = require('./middlewares/presentation');
var sessionMiddleware = require('./middlewares/session');
var transportMiddleware = require('./middlewares/transport');
var networkMiddleware = require('./middlewares/network');
var linkMiddleware = require('./middlewares/link');
var physicalMiddleware = require('./middlewares/physical');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.get('/knockout.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/knockout/build/output/knockout-latest.js');
});
app.get('/axios.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/axios/dist/axios.js');
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(applicationMiddleware);
app.use(presentationMiddleware);
app.use(sessionMiddleware);
app.use(transportMiddleware);
app.use(networkMiddleware);
app.use(linkMiddleware);
app.use(physicalMiddleware);

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/', function (req, res) {
    res.send(req.body);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
