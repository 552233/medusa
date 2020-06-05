const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const MessageSchema = new Schema({
    'id': Schema.Types.ObjectId,
    'userName': String,
    'created': Date
})

module.exports = mongoose.model('user_data', MessageSchema);