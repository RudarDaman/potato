var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
// const jwt = require('_helpers/jwt');
const errorHandler = require('./server/_helpers/error-handler');

//Port
const port = 3000;

//adding middleware - cors
app.use(cors());

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static files
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/potato/type', require('./server/potato/potato-type/potato-type.controller'));
app.use('/api/users', require('./server/users/user.controller'));

app.use(errorHandler);

//Testing Server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started at port: ' + port);
});
