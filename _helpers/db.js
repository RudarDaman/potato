const config = require('../config.json');
const mongoose = require('mongoose');

mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected to db');
    })
    .catch(() => {
        console.log('Connection failed!!');
    });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    PotatoType: require('../potato/potato-type/potato-type.model')
};
