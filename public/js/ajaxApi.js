  var hotels = [];
  var restaurants = [];
  var activities = [];


$.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/restaurants',

    })
    .then(function(data) {
        restaurants = data;
        // some code to run when the response comes back
        return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/hotels',

      })
    })
    .then(function(data) {
        hotels = data;
        // some code to run when the response comes back
        return $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/api/activities',

      })
    })
    .then(function(data) {
        activities = data;
        optionsPopulator();
        // some code to run when the response comes back
        
    })
    .catch(function(errorObj) {
        console.log("BIG ERR")
            // some code to run if the request errors out
    });






