// Include React
var React = require("react");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Main component
var Track = React.createClass({

// psuedocode
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

      <div>
        <div idName=  "distance"> 
          <p className ="text-center"> 
            Distance [drop down here]
          </p>
        </div>
        <div idName=  "date"> 
          <p className ="text-center"> 
            bootstrap date here 
          </p>
        </div>
        <div idName=  "time"> 
          <p className ="text-center" idName = "minutes"> 
            Minutes [drop down here]
          </p> 
          <p className ="text-center" idName = "seconds"> 
            Seconds [drop down here]
          </p>
        </div>
        <div>
          <p className ="text-center">
            <button className = "btn-danger"> 
              add new run 
            </button> 
          </p>
        </div>
      </div>
    );
  }
});
// googled code for a table. no idea if it will work ha. 
class Table extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Distance</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Time</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}


// Export the component back for use in other files
module.exports = Track;
