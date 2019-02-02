// import dependencies
const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const routes = require('./routes');
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require('request');
const PORT = process.env.PORT || 3000;

// set up express server
const app = express();

// set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// serve up front end from server ONLY if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

} 

app.get("/api/stationdata", function(req,res) {
    var requestSettings = {
        method: 'GET',
        url: 'http://datamine.mta.info/mta_esi.php?key=fa66ddb413e7c2536fabff2a1c8878bb&feed_id=1',
        encoding: null
      };
      request(requestSettings, function (error, response, body) {
        if (!error && response.statusCode == 200) {

          var stationList = [];
          var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
          feed.entity.forEach(function(entity) {
            if (entity.trip_update) {

              stationList.push(entity.trip_update);

            }
          });
          res.send(stationList);
        }
      });
  });

  app.get("/api/stopFile", function(req,res) {
    res.sendFile(path.join(__dirname, "./stops.txt"));
  });


  app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
    
  });
// set up a wildcard route just in case all of the other routes fail


// turn on mongo connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectapp", {useNewUrlParser: true});

// turn on server
app.listen(PORT, () => console.log(`🗺️ ==> Server now on ${PORT}`))

