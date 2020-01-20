var mongoose = require('mongoose');

const potatoTypeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PotatoType', potatoTypeSchema);
