'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('edit');
});

router.post('/', (req, res, next) => {
  console.log(req.body); // TODO 予定と候補を保存する実装をする
  res.render(307, '/');
});


module.exports = router;
