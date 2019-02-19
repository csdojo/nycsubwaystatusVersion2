// import dependencies
const express = require('express');
const path = require('path');
const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
const request = require('request');


// set up express server
const app = express();

const PORT = process.env.PORT || 3000;


// set up express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// serve up front end from server ONLY if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

} 

// summary status 

app.get("/api/statussummary", function(req,res) {
  request('http://web.mta.info/status/serviceStatus.txt', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body)
  });
})

// status detail
app.get("/api/statusdetail", function(req,res) {
  request('http://web.mta.info/status/ServiceStatusSubway.xml', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body)
  });

})

// GET FEED of Line 123456s

app.get("/api/stationdata", function(req,res) {
    var requestSettings = {
        method: 'GET',
        url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=1',
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
  
  // get feed of line SIR

  app.get("/api/stationdataSIR", function(req,res) {
    var requestSettings = {
        method: 'GET',
        url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=11',
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

// GET FEED of Line ACE

app.get("/api/stationdataACE", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=26',
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

//GET FEED of Line NQRW

app.get("/api/stationdataNQRW", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=16',
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
// GET FEED of Line BDFM
app.get("/api/stationdataBDFM", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=21',
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

//GET FEED of Line L
app.get("/api/stationdataL", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=2',
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

//GET FEED of Line G
app.get("/api/stationdataG", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=31',
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

// Get Feed of Line JZ
app.get("/api/stationdataJZ", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=36',
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

// GET Feed of line 7

app.get("/api/stationdata7", function(req,res) {
  var requestSettings = {
      method: 'GET',
      url: 'http://datamine.mta.info/mta_esi.php?key=5a1f9f21265ac1a0338e43fdcfd6321f&feed_id=51',
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

//GET local stops txt file 
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

