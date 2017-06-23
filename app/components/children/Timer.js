// Include React
var React = require("react");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Guest component
var Guest = React.createClass({

// full app psuedocode
  // 1) on page load: a modal pops up (or separate page) with options to login or "guest slay" (first wire frame)
  // 2) click guest slay redirect to pre-written workout (3rd wire frame)
  // 3) click login redirect to google authentication
  // 4) google login is approved (or error message thrown)
  // 5) login approved: redirect to welcome slayer (second wire frame)
  // 6) if user chooses time, style and clicks "ready to slay"- workout is generated from database and displayed (3rd wire frame)
  // 7) if user chooses track redirect to tracker page (4th wire frame)
  // 8) add a button on each page (besides login) the reditects to a workout resources list (for now straight up weblinks, will complie ASAP)

  // Here we render the function

  render: function() {
    return (

      <div className="text-center">
        <p className ="text-center"><button className = "btn-danger"> Time your run or AMRP</button> </p>
        <p className ="text-center"><button className = "btn-danger"> Meditation countdown</button> </p>
        <p className="text-center">Here there be a fancy timer that counts up or down.</p>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Timer;