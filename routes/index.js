'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Kuya Sawa Official Page' });
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/works', function(req, res) {
  res.render('works');
});

router.get('/link', function(req, res) {
  res.render('link');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/works/commercial', function(req, res) {
  res.render('commercial');
});
router.get('/works/portrait', function(req, res) {
  res.render('portrait');
});
router.get('/works/runway', function(req, res) {
  res.render('runway');
});
router.get('/works/movie', function(req, res) {
  res.render('movie');
});

module.exports = router;
