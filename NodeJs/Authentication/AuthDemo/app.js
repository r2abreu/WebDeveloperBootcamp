// Requesting libraries

const express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose'),
	User = require('./models/user'),
	app = express();
// Settings

mongoose.connect('mongodb://localhost/authDemoApp', { useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	require('express-session')({
		secret: 'Maria is the best',
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//  ===================== Routes ============================

// ========== Register Routes ============

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/secret', isLoggedIn, function(req, res) {
	res.render('secret');
});

// Sign up form

app.get('/register', function(req, res) {
	res.render('register');
});

// Handling user sign up

app.post('/register', function(req, res) {
	req.body.username;
	req.body.password;
	User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
		if (err) {
			console.timeLog(err);
			return res.render('register');
		} else {
			passport.authenticate('local')(req, res, function() {
				res.redirect('/secret');
			});
		}
	});
});

//  ====== Login Routes =========

// == Render loginform ==

app.get('/login', function(req, res) {
	res.render('login');
});

// == Login logic  ==

// middleware: some code that runs before our final callback, it runs inmediately. The idea is that code to sit
// between the beggining of the route and the end of it hence the name middleware

app.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/secret',
		failureRedirect: '/login'
	}),
	function(req, res) {}
);

// =========== Logout Routes ============

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.redirect('/login');
	}
}

// Starting up the server

app.listen(3000, function() {
	console.log('server is running');
});
