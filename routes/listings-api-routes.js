var db = require("../models");
var geocoder = require('geocoder');

module.exports = function(app) {
    //to retrieve data from listing table and display
    
    //post for home page
    app.post("/api/address", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        var searchString = req.body.address;
        console.log(searchString);
         // // Geocoding
         geocoder.geocode(searchString, function ( err, data ) {
            if(err) {
                res.redirect("/");
            };
            //get the city name
            console.log(data.results[0]); 
            //result will look like: https://developers.google.com/maps/documentation/geocoding/intro?csw=1#JSON
            cityName = data.results[0];
            // console.log(cityName);

            res.json({city: cityName});
        });
    
     
    });

    //post for listingsearch
    app.post("/api/listingsaddress", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        var searchString = req.body.address;
        console.log(searchString);
         // // Geocoding
         geocoder.geocode(searchString, function (err, data) {
            if(err) {
                console.log("api error try again")
            };
            //get the city name
            // console.log("here",data.results[0]); 
            //result will look like: https://developers.google.com/maps/documentation/geocoding/intro?csw=1#JSON
            cityName = data.results[0];
            // console.log(cityName);

            res.json({city: cityName});
        });
    
     
    });


    app.get("/api/:cityname", function (req, res) {
        console.log(req.body);
        db.Listing.findAll({
            // where: query,
        }).then(function(listings) {
            // res.json({listings: listings});
            console.log(listings)
        });
       
    })
    
};
