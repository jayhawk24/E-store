const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Product = require('./product');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    googleId: {
        type: String
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('users', userSchema);

module.exports = User;
