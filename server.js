// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var geocoder = require('geocoder');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7070;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/listings-api-routes")(app);
require("./routes/owners-api-routes")(app);
require("./routes/renters-api-routes")(app);
require("./routes/reservations-api-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({forece:true}).then(function() {  //force:true to drop table content everytime
db.sequelize.sync({}).then(function() {  //force:true to drop table content everytime
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT); //var PORT = process.env.PORT || 7070;
  });
});
