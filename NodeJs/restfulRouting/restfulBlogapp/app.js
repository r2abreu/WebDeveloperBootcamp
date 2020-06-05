const methodOverride = require('method-override'),
	expressSanitizer = require('express-sanitizer'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express(),
	routes = require('./routes/routes');

// App configuration

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/restfulBlogapp', { useNewUrlParser: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(expressSanitizer());
app.use(routes);

// Mongoose Model configuration

app.listen(3000, function() {
	console.log('Server is running');
});
