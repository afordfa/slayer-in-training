// Include React
var React = require("react");


var Times = React.createClass({


  getInitialState: function() {
    return { };
  },

  

  render: function() {
    return (
      <div>
        {/*eventually fill this in with real data from SQL*/}
        <table>
          <tr>
            <th>Date</th>
            <th>Distance</th> 
            <th>Time</th>
          </tr>
          <tr>
            <td>6/15/17</td>
            <td>1 mile</td> 
            <td>8:23</td>
          </tr>
          <tr>
            <td>6/17/17</td>
            <td>2 miles</td> 
            <td>15:34</td>
          </tr>
        </table>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Times;