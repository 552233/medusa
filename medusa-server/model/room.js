const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const MessageSchema = new Schema({
    'id': Schema.Types.ObjectId,
    'roomName': String,
    'users': Array,
    'created': Date
})

module.exports = mongoose.model('room_data', MessageSchema);