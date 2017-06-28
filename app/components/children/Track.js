// Include React
var React = require("react");

// Here we include all of the sub-components
var Times = require("./track/Times.js");
var DatePicker = require("react-bootstrap-date-picker");
var axios = require("axios");


// Creating the Main component
var Track = React.createClass({

// default to displaying all run times sorted by date
// when distance is selected, update table to only show those run times (sorted by date still)
// when run-time is added, keep table limited to that distance
// add button to switch table back to all run times


  getInitialState: function() {
    var value = new Date().toISOString();
    return { times: [], distance: "1 mile", minutes: 0, seconds: 0, value: value };
  },


  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleDateChange: function(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
    });
  },
  componentDidUpdate: function(){
    // Access ISO String and formatted values from the DOM. 
    var hiddenInputElement = document.getElementById("example-datepicker");
    // console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z" 
    // console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016" 
  },
  handleAdd: function(){
    console.log("test");

    var data = {
      date: this.state.value,
      distance: this.state.distance,
      minutes: parseInt(this.state.minutes),
      seconds: parseInt(this.state.seconds),
      UserId: 1
    }
    var url = "/api/tracker/" + data.UserId;
    console.log(url)
    console.log(data);
    return axios.post("/api/tracker/1",  data )
  },


  render: function() {
    return (
      <div>
        <div idName=  "distance"> 
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <div>
                  <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleDateChange} />
              </div>
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

        <div className ="text-center" idName=  "minutes"> 
          <form>
          {/*I HAVE NO IDEA HOW TO GET THESE TO APPEAR SIDE-BY-SIDE!!! */}
            <h4 className="">
              <strong>Minutes</strong>
            </h4>
            <input
              type="number"
              min="1"
              value={this.state.minutes}
              className="form-control"
              id="minutes"
              onChange={this.handleChange}
              required
            />
            <h4 className="">
              <strong>Seconds</strong>
            </h4>
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
          </form>
        </div>
        <div>
          <p className ="text-center">
            <button className = "btn-danger" onClick={this.handleAdd}> 
              add new run 
            </button> 
          </p>
        </div>

        <div className ="text-center times-table"> 
          {/*Here we bring in the child-element to render the table of times*/}
          <Times />
        </div>
      </div>
    );
  }
});


// Export the component back for use in other files
module.exports = Track;
