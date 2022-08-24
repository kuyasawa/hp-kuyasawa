'use strict'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kuya Sawa Official Page' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/works', function(req, res, next) {
  res.render('works');
});

router.get('/link', function(req, res, next) {
  res.render('link');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router;
