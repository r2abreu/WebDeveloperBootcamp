const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/blogDemo', { useNewUrlParser: true });

// POST - title, content

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var postModel = mongoose.model('Post', postSchema);

// USER - email, name

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	post: [ postSchema ] // Embedding data, data association one to many. One user to many posts
});

var userModel = mongoose.model('User', userSchema);

// var newUser = new userModel({
// 	email: 'hermione@212.iu',
// 	name: 'Hermione Granger',
// 	post: []
// });

// newUser.post.push({
// 	title: 'How to brew polyjuice',
// 	content: 'Just kidding, go to potions class'
// });

// newUser.save(function(err, user) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost = new postModel({
// 	title: 'Reflections on Apples',
// 	content: 'They are delicious'
// });

// newPost.save(function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

userModel.findOne({ name: 'Hermione Granger' }, function(err, user) {
	if (err) {
		console.log(err);
	} else {
		user.post.push({
			title: 'Three things I really hate',
			content: 'Voldemort, Voldemort, Voldemort'
		});
		user.save(function(err, user) {
			if (err) {
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});
