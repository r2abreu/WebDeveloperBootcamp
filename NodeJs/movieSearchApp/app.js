// Engaging esxpress and request packs

const express = require('express');
const app = express();
const request = require('request');

// Setting the file type default for embbeded javaScript

app.set('view engine', 'ejs');

// Setting variable for the PORT listener

PORT = 3000;

// GET route for the search page

app.get('/', function(req, res) {
	res.render('search');
});

// GET route for the form page

app.get('/results', function(req, res) {
	var input = req.query.input;
	var url = 'http://www.omdbapi.com/?s=' + input + '&apikey=thewdb';
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			const parsedData = JSON.parse(body);
			res.render('results', { parsedData: parsedData });
		} else {
			console.log(error);
		}
	});
});

app.listen(3000, function() {
	console.log('Server is running');
});
