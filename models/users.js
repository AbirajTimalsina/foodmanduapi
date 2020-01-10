const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);