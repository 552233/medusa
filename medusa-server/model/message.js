const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const MessageSchema = new Schema({
    'id': Schema.Types.ObjectId,
    'userId': String,
    'roomId': String,
    'roomName': String,
    'userName': String,
    'message': String,
    'created': Date
})

module.exports = mongoose.model('message_data', MessageSchema);