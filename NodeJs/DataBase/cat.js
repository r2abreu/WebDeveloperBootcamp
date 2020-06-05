const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/cat-app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// Adding a new cat to the data base

// var george = new Cat({
// 	name: 'Mrs. Norris',
// 	age: 7,
// 	temperament: 'evil'
// });

// george.save(function(err, cat) {
// 	if (err) {
// 		console.log('something went wrong');
// 	} else {
// 		console.log('we have just saved the input');
// 		console.log(cat);
// 	}
// });

// Retrieve all the cat from the DB and print with console.log

Cat.create(
	{
		name: 'Snow White',
		age: 50,
		temperament: 'Bland'
	},
	function(err, cat) {
		if (err) {
			console.log('something went wrong');
			console.log(err);
		} else {
			console.log(cat);
		}
	}
);

Cat.find({}, function(err, cats) {
	if (err) {
		console.log('Error!');
		console.log(err);
	} else {
		console.log('ALL THE CATS');
		console.log(cats);
	}
});
