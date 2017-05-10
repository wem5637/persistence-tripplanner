var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');



router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});


router.route('/api/hotels').get(function(req, res, next){
  var arr;
  Hotel.findAll()
  .then(function(hotels){
    arr = hotels;
    res.json(arr);
  })
})

router.route('/api/restaurants').get(function(req, res, next){
  var arr;
  Hotel.findAll()
  .then(function(restaurants){
    arr = restaurants;
    res.json(arr);
  })
})

router.route('/api/activities').get(function(req, res, next){
  var arr;
  Hotel.findAll()
  .then(function(activities){
    arr = activities;
    res.json(arr);
  })
})


module.exports = router;
