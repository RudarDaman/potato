var mongoose = require('mongoose');

const potatoTypeSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('PotatoType', potatoTypeSchema);
