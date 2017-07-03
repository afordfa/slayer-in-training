// Include React
var React = require("react");
var axios = require("axios");


var Details = React.createClass({


  getInitialState: function() {
    return { };
  },
  renderList: function() {
    // Getting an array of only purchased items
    const list = this.props.workout;

    return list.map(item => (
        <tr>
          <td>{item.title}</td>
          <td>{item.minutes} minutes</td>
        </tr>
      ));
  },

  
  render: function() {
    // this.buildWorkout();
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Details;