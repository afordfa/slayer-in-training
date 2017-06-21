var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



  // Get route for retrieving a all tracker data for a user
  app.get("/api/tracker/:id", function(req, res) {
    
    db.Tracker.findAll({
        where: {
          UserId: req.params.id
        }
    }).then(function(dbTracker) {
      console.log(dbTracker);
      res.json(dbTracker);
    });
  });
}

