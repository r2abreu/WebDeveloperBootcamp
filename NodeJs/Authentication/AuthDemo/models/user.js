// Requesting libraries

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Creating model

const userModel = new mongoose.Schema({
	username: String,
	password: String
});

// Connecting passport local

userModel.plugin(passportLocalMongoose);

// Exporting module

module.exports = mongoose.model('User', userModel);
