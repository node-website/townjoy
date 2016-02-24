var express = require('express');
var router = express.Router();

// 定义网站主页的路由
router.get('/', function(req, res){
  res.render('index', {page:1});
});

// 定义 product 页面的路由
router.get('/product', function(req, res){
  res.render('product', {page:2});
});

// 定义 about 页面的路由
router.get('/about', function(req, res){
  res.render('about', {page:3});
});

// 定义 contact 页面的路由
router.get('/contact', function(req, res){
  res.render('contact', {page:4});
});

module.exports = router;

