const mongoose = require('mongoose');

// USER - email, name

var userSchema = new mongoose.Schema({
	// Referencing data, data association one to many. One user to many posts
	email: String,
	name: String,
	post: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post'
		}
	]
});

module.exports = mongoose.model('User', userSchema);
