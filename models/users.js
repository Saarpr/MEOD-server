const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 64
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
}, { collection: 'users' });

const User = model('User', userSchema);

module.exports = User;