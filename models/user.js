const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    givenName: {
        type: String,
        required: true
    },
    familyName: String,
    googleID: String,
    image: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

var User = mongoose.model('user', userSchema);
module.exports = User;