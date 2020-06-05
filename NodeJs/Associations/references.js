const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/blogDemo2', { useNewUrlParser: true });
var Post = require('./models/post');
var User = require('./models/user');

Post.create(
	{
		title: 'How to cook the best burguer part 4',
		content: 'Sunday Finnally'
	},
	function(err, post) {
		User.findOne({ email: 'r@gmail.com' }, function(err, foundUser) {
			if (err) {
				console.log(err);
			} else {
				foundUser.post.push(post);
				foundUser.save(function(err, data) {
					if (err) {
						console.log(err);
					} else {
						console.log(data);
					}
				});
			}
		});
	}
);
// Retrieve the users full data from the object _id
// userModel.findOne({ email: 'r@gmail.com' }).populate('post').exec(function(err, user) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// userModel.create({
// 	email: 'r@gmail.com',
// 	name: 'Arturo Abreu'
// });
