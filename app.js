var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var path = require('path');

var app = express();

mongoose.connect("mongodb://Rudar:Rudardaman1@ds155616.mlab.com:55616/potato", {useNewUrlParser: true})
.then(() => {
    console.log('Connected to db');
})
.catch(() => {
    console.log('Connection failed!!');
});

const route = require('./routes/route');

//Port 
const port = 3000;

//adding middleware - cors
app.use(cors());

//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

//Testing Server
app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started at port: ' + port);
});
