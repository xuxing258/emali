const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    user: {
        type: Number,
        required: true
    },
    name: String
});

module.exports = mongoose.model('numberFile',studentSchema);