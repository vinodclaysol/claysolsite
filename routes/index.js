var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Claytronics' });
});

router.get('/channelpartners', function(req, res, next) {
  res.render('channelpartners', { title: 'Channel Partners - Claytronics' });
});


router.get('/qttraining', function(req, res, next) {
  res.render('qttraining', { title: 'Qt Training - Claytronics' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services - Claytronics' });
});


router.get('/service1', function(req, res, next) {
  res.render('service1', { title: 'Qt and QML Services - Claytronics' });
});

router.get('/service2', function(req, res, next) {
  res.render('service2', { title: 'Application Development - Claytronics' });
});

router.get('/service3', function(req, res, next) {
  res.render('service3', { title: 'Embedded Software Service - Claytronics' });
});
router.get('/service4', function(req, res, next) {
  res.render('service4', { title: 'In-Vechical Infotainment - Claytronics' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About - Claytronics' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Claytronics' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test - Claytronics' });
});

router.get('/partner1', function(req, res, next) {
  res.render('partners/partner1', { title: 'Qt - Claytronics' });
});
router.get('/partner2', function(req, res, next) {
  res.render('partners/partner2', { title: 'Parasoft - Claytronics' });
});
router.get('/partner3', function(req, res, next) {
  res.render('partners/partner3', { title: 'IBM Business Partner - Claytronics' });
});
router.get('/partner4', function(req, res, next) {
  res.render('partners/partner4', { title: 'CollabNet - Claytronics' });
});
router.get('/partner5', function(req, res, next) {
  res.render('partners/partner5', { title: 'Phyton - Claytronics' });
});
router.get('/partner6', function(req, res, next) {
  res.render('partners/partner6', { title: 'Real Intent - Claytronics' });
});
router.get('/partner7', function(req, res, next) {
  res.render('partners/partner7', { title: 'Omnidex - Claytronics' });
});

module.exports = router;
