'use strict';

var express = require('express');
const News = require('../models/news-model');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('edit');
});

router.post('/', (req, res, next) => {
  console.log(req.body); // TODO 予定と候補を保存する実装をする
  News.insert({
    newsId: serial,
    newsDate: req.body.newsDate,
    newsContent: req.body.newsContent
  })
  res.redirect('/');
});


module.exports = router;
