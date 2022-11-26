const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number: String,
    type: String,
    beds: String,
    status: String
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;