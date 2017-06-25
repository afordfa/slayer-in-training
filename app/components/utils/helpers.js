var db = require("../../../models");
const Helper = {
  // Retrieves all times from the db
  // getTimes: function() {
  //   app.get("/api/tracker", function(req, res) {
      
  //     db.Tracker.findAll({}).then(function(dbTracker) {
  //       console.log(dbTracker);
  //       res.json(dbTracker);
  //       return dbTracker;
  //     });
  //   });  
  // },
  // Saves a new quote to the db
  // saveQuote: function(text) {
  //   return axios.post("/api/quotes", { text });
  // },
  // // Deletes a quote from the db
  // deleteQuote: function(id) {
  //   return axios.delete(`/api/quotes/${id}`);
  // },
  // // Toggles a quote's favorite property in the db
  // favoriteQuote: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // }
};

export default Helper;


