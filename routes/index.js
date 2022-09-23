'use strict';

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

router.get('/works/commercial', function(req, res, next) {
  res.render('commercial');
});
router.get('/works/portrait', function(req, res, next) {
  res.render('portrait');
});
router.get('/works/runway', function(req, res, next) {
  res.render('runway');
});
router.get('/works/movie', function(req, res, next) {
  res.render('movie');
});

module.exports = router;
