var mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    quantity: { type: String, required: true },
    location: { type: String, required: true },
    id: { type: String, required: true }
});

module.exports = mongoose.model('Post', dataSchema);
