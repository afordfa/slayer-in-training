// Include React
var React = require("react");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");
var Times = require("./track/Times.js")

// Creating the Main component
var Track = React.createClass({

// default to displaying all run times sorted by date
// when distance is selected, update table to only show those run times (sorted by date still)
// when run-time is added, keep table limited to that distance
// add button to switch table back to all run times



  getInitialState: function() {
    return { times: [], distance: "1 mile", minutes: 0, seconds: 0 };
  },
  getTimes: function(type) {
    helpers.getTimes(type).then((res) => {
      this.setState({ times: res.data });
    });
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },


  handleAdd: function(){
    console.log("test");
    //this needs to add data to the database
  },


  render: function() {
    return (
      <div>
        <div idName=  "distance"> 
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Distance</strong>
              </h4>
              <div>
                <select 
                name="distance"
                value={this.state.distance}
                id="distance"
                onChange={this.handleChange}
                >
                  <option value="1">1 mile</option>
                  <option value="2">2 miles</option>
                  <option value="5K">5K</option>
                </select>
              </div>   
            </div>
          </form>       
        </div>
        <div idName=  "date"> 
          <div className ="text-center"> 

        {/*Here we bring in the child-element to render the table of times*/}
            <Times />
          }
          </div>
        </div>
        <div className ="text-center" idName=  "minutes"> 

      {/*I HAVE NO IDEA HOW TO GET THESE TO APPEAR SIDE-BY-SIDE!!! */}
              <input
                type="number"
                min="1"
                value={this.state.minutes}
                className="form-control"
                id="minutes"
                onChange={this.handleChange}
                required
              />

              <input
                type="number"
                min="0"
                max="59"
                value={this.state.seconds}
                className="form-control"
                id="seconds"
                onChange={this.handleChange}
                required
              />

        </div>
        <div>
          <p className ="text-center">
            <button className = "btn-danger" onClick={this.handleAdd}> 
              add new run 
            </button> 
          </p>
        </div>
      </div>
    );
  }
});


// Export the component back for use in other files
module.exports = Track;
