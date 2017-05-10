  var hotels = "hotels";
  var restaurants = "rests";
  var activities = "acts";

  $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/hotels',
      async: false,
      success: function(data) {
          hotels = data;
          console.log("hotels", hotels)

      }

  })
  
  $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/restaurants',
      async: false,
      success: function(data) {
          restaurants = data;
          console.log("rests", restaurants)
      }

  })


  $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/activities',
      async: false,
      success: function(data) {
          activities = data;
          console.log('activities', activities)
      }

  })


  // console.log("hotels", hotels)
  // console.log("rests", restaurants)
  // console.log('activities', activities)
