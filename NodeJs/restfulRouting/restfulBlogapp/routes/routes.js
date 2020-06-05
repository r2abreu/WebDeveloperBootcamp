const express = require('express');
const router = express.Router();
const Blog = require('../models/models');

// RESTful routes

// Root route

router.get('/', function(req, res) {
	res.redirect('/blogs');
});

// INDEX

router.get('/blogs', function(req, res) {
	// Retrieves or finds all the blog posts on the database
	Blog.find({}, function(err, blogs) {
		if (err) {
			console.log(err);
		} else {
			// Sends the objects of the blog database as data to be render
			res.render('index', { blogs: blogs });
		}
	});
});

// NEW

router.get('/blogs/new', function(req, res) {
	res.render('new');
});

// CREATE

router.post('/blogs', function(req, res) {
	// create blog
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog, function(err, newBlog) {
		if (err) {
			res.render('new');
		} else {
			// redirect to index
			res.redirect('/blogs');
		}
	});
});

// SHOW

router.get('/blogs/:id', function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.render('show', { blog: foundBlog });
		}
	});
});

// EDIT

router.get('/blogs/:id/edit', function(req, res) {
	Blog.findById(req.params.id, function(err, foundBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.render('edit', { blog: foundBlog });
		}
	});
});

// UPDATE ROUTE

router.put('/blogs/:id', function(req, res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.redirect('/blogs/' + req.params.id);
		}
	});
});

// DELETE

router.delete('/blogs/:id', function(req, res) {
	Blog.findByIdAndRemove(req.params.id, function(err, removedBlog) {
		if (err) {
			res.redirect('/blogs');
		} else {
			res.redirect('/blogs');
		}
	});
});

module.exports = router;
